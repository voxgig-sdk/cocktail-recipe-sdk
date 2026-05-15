package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cocktail-recipe-sdk"
	"github.com/voxgig-sdk/cocktail-recipe-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestFilterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Filter(nil)
		if ent == nil {
			t.Fatal("expected non-nil FilterEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := filterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "filter." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set COCKTAILRECIPE_TEST_FILTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		filterRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.filter", setup.data)))
		var filterRef01Data map[string]any
		if len(filterRef01DataRaw) > 0 {
			filterRef01Data = core.ToMapAny(filterRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = filterRef01Data

		// LIST
		filterRef01Ent := client.Filter(nil)
		filterRef01Match := map[string]any{}

		filterRef01ListResult, err := filterRef01Ent.List(filterRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, filterRef01ListOk := filterRef01ListResult.([]any)
		if !filterRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", filterRef01ListResult)
		}

	})
}

func filterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "filter", "FilterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read filter test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse filter test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"filter01", "filter02", "filter03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("COCKTAILRECIPE_TEST_FILTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"COCKTAILRECIPE_TEST_FILTER_ENTID": idmap,
		"COCKTAILRECIPE_TEST_LIVE":      "FALSE",
		"COCKTAILRECIPE_TEST_EXPLAIN":   "FALSE",
		"COCKTAILRECIPE_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["COCKTAILRECIPE_TEST_FILTER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["COCKTAILRECIPE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["COCKTAILRECIPE_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCocktailRecipeSDK(core.ToMapAny(mergedOpts))
	}

	live := env["COCKTAILRECIPE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["COCKTAILRECIPE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
