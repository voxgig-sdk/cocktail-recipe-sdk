# CocktailRecipe Ruby SDK



The Ruby SDK for the CocktailRecipe API — an entity-oriented client using idiomatic Ruby conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cocktail-recipe-sdk/releases](https://github.com/voxgig-sdk/cocktail-recipe-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CocktailRecipe_sdk"

client = CocktailRecipeSDK.new({
  "apikey" => ENV["COCKTAIL_RECIPE_APIKEY"],
})
```

### 2. List filter records

```ruby
begin
  # list returns an Array of Filter records — iterate directly.
  filters = client.Filter.list
  filters.each do |item|
    puts "#{item["id"]} #{item["name"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  warn result["err"]
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = CocktailRecipeSDK.test({
  "entity" => { "filter" => { "test01" => { "id" => "test01" } } },
})

# load returns the bare mock record (raises on error).
filter = client.Filter.load({ "id" => "test01" })
puts filter
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CocktailRecipeSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
COCKTAIL_RECIPE_TEST_LIVE=TRUE
COCKTAIL_RECIPE_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CocktailRecipeSDK

```ruby
require_relative "CocktailRecipe_sdk"
client = CocktailRecipeSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CocktailRecipeSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CocktailRecipeSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Filter` | `(data) -> FilterEntity` | Create a Filter entity instance. |
| `List` | `(data) -> ListEntity` | Create a List entity instance. |
| `Lookup` | `(data) -> LookupEntity` | Create a Lookup entity instance. |
| `Random` | `(data) -> RandomEntity` | Create a Random entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> Array` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CocktailRecipeError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Filter

| Field | Description |
| --- | --- |
| `id_drink` |  |
| `str_drink` |  |
| `str_drink_thumb` |  |

Operations: List.

API path: `/filter.php`

#### List

| Field | Description |
| --- | --- |
| `drink` |  |
| `str_alcoholic` |  |
| `str_category` |  |
| `str_glass` |  |
| `str_ingredient1` |  |

Operations: List.

API path: `/list.php`

#### Lookup

| Field | Description |
| --- | --- |
| `drink` |  |
| `ingredient` |  |

Operations: List.

API path: `/lookup.php`

#### Random

| Field | Description |
| --- | --- |
| `drink` |  |
| `id_drink` |  |
| `str_alcoholic` |  |
| `str_category` |  |
| `str_drink` |  |
| `str_drink_thumb` |  |
| `str_glass` |  |
| `str_ingredient1` |  |
| `str_ingredient2` |  |
| `str_instruction` |  |
| `str_measure1` |  |
| `str_measure2` |  |

Operations: List.

API path: `/random.php`

#### Search

| Field | Description |
| --- | --- |
| `drink` |  |
| `ingredient` |  |

Operations: List.

API path: `/search.php`



## Entities


### Filter

Create an instance: `filter = client.Filter`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id_drink` | ``$STRING`` |  |
| `str_drink` | ``$STRING`` |  |
| `str_drink_thumb` | ``$STRING`` |  |

#### Example: List

```ruby
# list returns an Array of Filter records (raises on error).
filters = client.Filter.list
```


### List

Create an instance: `list = client.List`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | ``$ARRAY`` |  |
| `str_alcoholic` | ``$STRING`` |  |
| `str_category` | ``$STRING`` |  |
| `str_glass` | ``$STRING`` |  |
| `str_ingredient1` | ``$STRING`` |  |

#### Example: List

```ruby
# list returns an Array of List records (raises on error).
lists = client.List.list
```


### Lookup

Create an instance: `lookup = client.Lookup`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | ``$ARRAY`` |  |
| `ingredient` | ``$ARRAY`` |  |

#### Example: List

```ruby
# list returns an Array of Lookup records (raises on error).
lookups = client.Lookup.list
```


### Random

Create an instance: `random = client.Random`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | ``$ARRAY`` |  |
| `id_drink` | ``$STRING`` |  |
| `str_alcoholic` | ``$STRING`` |  |
| `str_category` | ``$STRING`` |  |
| `str_drink` | ``$STRING`` |  |
| `str_drink_thumb` | ``$STRING`` |  |
| `str_glass` | ``$STRING`` |  |
| `str_ingredient1` | ``$STRING`` |  |
| `str_ingredient2` | ``$STRING`` |  |
| `str_instruction` | ``$STRING`` |  |
| `str_measure1` | ``$STRING`` |  |
| `str_measure2` | ``$STRING`` |  |

#### Example: List

```ruby
# list returns an Array of Random records (raises on error).
randoms = client.Random.list
```


### Search

Create an instance: `search = client.Search`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | ``$ARRAY`` |  |
| `ingredient` | ``$ARRAY`` |  |

#### Example: List

```ruby
# list returns an Array of Search records (raises on error).
searchs = client.Search.list
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CocktailRecipe_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CocktailRecipe_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
filter = client.Filter
filter.load({ "id" => "example_id" })

# filter.data_get now returns the loaded filter data
# filter.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
