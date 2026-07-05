# CocktailRecipe Golang SDK



The Golang SDK for the CocktailRecipe API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Filter(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cocktail-recipe-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cocktail-recipe-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cocktail-recipe-sdk/go=../cocktail-recipe-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cocktail-recipe-sdk/go"
)

func main() {
    client := sdk.NewCocktailRecipeSDK(map[string]any{
        "apikey": os.Getenv("COCKTAIL_RECIPE_APIKEY"),
    })

    // List filter records — the value is the array of records itself.
    filters, err := client.Filter(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range filters.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
filters, err := client.Filter(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = filters
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

filter, err := client.Filter(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(filter) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCocktailRecipeSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCocktailRecipeSDK

```go
func NewCocktailRecipeSDK(options map[string]any) *CocktailRecipeSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CocktailRecipeSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CocktailRecipeSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Filter` | `(data map[string]any) CocktailRecipeEntity` | Create a Filter entity instance. |
| `List` | `(data map[string]any) CocktailRecipeEntity` | Create a List entity instance. |
| `Lookup` | `(data map[string]any) CocktailRecipeEntity` | Create a Lookup entity instance. |
| `Random` | `(data map[string]any) CocktailRecipeEntity` | Create a Random entity instance. |
| `Search` | `(data map[string]any) CocktailRecipeEntity` | Create a Search entity instance. |

### Entity interface (CocktailRecipeEntity)

All entities implement the `CocktailRecipeEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    filter, err := client.Filter(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // filter is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Filter

| Field | Description |
| --- | --- |
| `"id_drink"` |  |
| `"str_drink"` |  |
| `"str_drink_thumb"` |  |

Operations: List.

API path: `/filter.php`

#### List

| Field | Description |
| --- | --- |
| `"drink"` |  |
| `"str_alcoholic"` |  |
| `"str_category"` |  |
| `"str_glass"` |  |
| `"str_ingredient1"` |  |

Operations: List.

API path: `/list.php`

#### Lookup

| Field | Description |
| --- | --- |
| `"drink"` |  |
| `"ingredient"` |  |

Operations: List.

API path: `/lookup.php`

#### Random

| Field | Description |
| --- | --- |
| `"drink"` |  |
| `"id_drink"` |  |
| `"str_alcoholic"` |  |
| `"str_category"` |  |
| `"str_drink"` |  |
| `"str_drink_thumb"` |  |
| `"str_glass"` |  |
| `"str_ingredient1"` |  |
| `"str_ingredient2"` |  |
| `"str_instruction"` |  |
| `"str_measure1"` |  |
| `"str_measure2"` |  |

Operations: List.

API path: `/random.php`

#### Search

| Field | Description |
| --- | --- |
| `"drink"` |  |
| `"ingredient"` |  |

Operations: List.

API path: `/search.php`



## Entities


### Filter

Create an instance: `filter := client.Filter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id_drink` | `string` |  |
| `str_drink` | `string` |  |
| `str_drink_thumb` | `string` |  |

#### Example: List

```go
filters, err := client.Filter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(filters) // the array of records
```


### List

Create an instance: `list := client.List(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `[]any` |  |
| `str_alcoholic` | `string` |  |
| `str_category` | `string` |  |
| `str_glass` | `string` |  |
| `str_ingredient1` | `string` |  |

#### Example: List

```go
lists, err := client.List(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lists) // the array of records
```


### Lookup

Create an instance: `lookup := client.Lookup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `[]any` |  |
| `ingredient` | `[]any` |  |

#### Example: List

```go
lookups, err := client.Lookup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lookups) // the array of records
```


### Random

Create an instance: `random := client.Random(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `[]any` |  |
| `id_drink` | `string` |  |
| `str_alcoholic` | `string` |  |
| `str_category` | `string` |  |
| `str_drink` | `string` |  |
| `str_drink_thumb` | `string` |  |
| `str_glass` | `string` |  |
| `str_ingredient1` | `string` |  |
| `str_ingredient2` | `string` |  |
| `str_instruction` | `string` |  |
| `str_measure1` | `string` |  |
| `str_measure2` | `string` |  |

#### Example: List

```go
randoms, err := client.Random(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(randoms) // the array of records
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `[]any` |  |
| `ingredient` | `[]any` |  |

#### Example: List

```go
searchs, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(searchs) // the array of records
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cocktail-recipe-sdk/go/
├── cocktail-recipe.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cocktail-recipe-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
filter := client.Filter(nil)
filter.List(nil, nil)

// filter.Data() now returns the filter data from the last list
// filter.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
