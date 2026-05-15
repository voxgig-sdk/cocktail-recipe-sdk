# CocktailRecipe Ruby SDK Reference

Complete API reference for the CocktailRecipe Ruby SDK.


## CocktailRecipeSDK

### Constructor

```ruby
require_relative 'cocktail-recipe_sdk'

client = CocktailRecipeSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CocktailRecipeSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CocktailRecipeSDK.test
```


### Instance Methods

#### `Filter(data = nil)`

Create a new `Filter` entity instance. Pass `nil` for no initial data.

#### `List(data = nil)`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Lookup(data = nil)`

Create a new `Lookup` entity instance. Pass `nil` for no initial data.

#### `Random(data = nil)`

Create a new `Random` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## FilterEntity

```ruby
filter = client.Filter
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id_drink` | ``$STRING`` | No |  |
| `str_drink` | ``$STRING`` | No |  |
| `str_drink_thumb` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Filter.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FilterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListEntity

```ruby
list = client.List
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drink` | ``$ARRAY`` | No |  |
| `str_alcoholic` | ``$STRING`` | No |  |
| `str_category` | ``$STRING`` | No |  |
| `str_glass` | ``$STRING`` | No |  |
| `str_ingredient1` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.List.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LookupEntity

```ruby
lookup = client.Lookup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drink` | ``$ARRAY`` | No |  |
| `ingredient` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Lookup.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LookupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RandomEntity

```ruby
random = client.Random
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drink` | ``$ARRAY`` | No |  |
| `id_drink` | ``$STRING`` | No |  |
| `str_alcoholic` | ``$STRING`` | No |  |
| `str_category` | ``$STRING`` | No |  |
| `str_drink` | ``$STRING`` | No |  |
| `str_drink_thumb` | ``$STRING`` | No |  |
| `str_glass` | ``$STRING`` | No |  |
| `str_ingredient1` | ``$STRING`` | No |  |
| `str_ingredient2` | ``$STRING`` | No |  |
| `str_instruction` | ``$STRING`` | No |  |
| `str_measure1` | ``$STRING`` | No |  |
| `str_measure2` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Random.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RandomEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drink` | ``$ARRAY`` | No |  |
| `ingredient` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Search.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CocktailRecipeSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

