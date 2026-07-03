# Lookup entity test

require "minitest/autorun"
require "json"
require_relative "../CocktailRecipe_sdk"
require_relative "runner"

class LookupEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CocktailRecipeSDK.test(nil, nil)
    ent = testsdk.Lookup(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = lookup_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "lookup." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set COCKTAILRECIPE_TEST_LOOKUP_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    lookup_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.lookup")))
    lookup_ref01_data = nil
    if lookup_ref01_data_raw.length > 0
      lookup_ref01_data = Helpers.to_map(lookup_ref01_data_raw[0][1])
    end

    # LIST
    lookup_ref01_ent = client.Lookup(nil)
    lookup_ref01_match = {}

    lookup_ref01_list_result, err = lookup_ref01_ent.list(lookup_ref01_match, nil)
    assert_nil err
    assert lookup_ref01_list_result.is_a?(Array)

  end
end

def lookup_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "lookup", "LookupTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CocktailRecipeSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["lookup01", "lookup02", "lookup03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["COCKTAILRECIPE_TEST_LOOKUP_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "COCKTAILRECIPE_TEST_LOOKUP_ENTID" => idmap,
    "COCKTAILRECIPE_TEST_LIVE" => "FALSE",
    "COCKTAILRECIPE_TEST_EXPLAIN" => "FALSE",
    "COCKTAILRECIPE_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["COCKTAILRECIPE_TEST_LOOKUP_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["COCKTAILRECIPE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["COCKTAILRECIPE_APIKEY"],
      },
      extra || {},
    ])
    client = CocktailRecipeSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["COCKTAILRECIPE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["COCKTAILRECIPE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
