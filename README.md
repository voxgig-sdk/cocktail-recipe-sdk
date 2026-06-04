# CocktailRecipe SDK

Search, filter, and look up cocktail recipes, ingredients, and drink images from TheCocktailDB

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Cocktail Recipe API

[TheCocktailDB](https://www.thecocktaildb.com/) is a community-maintained, crowd-sourced database of cocktail recipes, ingredients, and drink imagery. It is run by the same UK-based team behind TheMealDB and exposes a simple JSON HTTP API at `https://www.thecocktaildb.com/api/json/v1/{key}`.

What you get from the API:

- Search drinks by name, by first letter, or search ingredients by name (`search.php`).
- Look up full cocktail details by drink ID or ingredient details by ingredient ID (`lookup.php`).
- Fetch a random cocktail (`random.php`).
- Filter drinks by ingredient, alcoholic / non-alcoholic status, category, or glass type (`filter.php`).
- List the available categories, glasses, ingredients, and alcoholic filter values (`list.php`).
- Cocktail and ingredient images in multiple sizes (200/350/500 px for drinks; 100/350/700 px for ingredients).

Operational notes: the API is JSON over HTTPS with CORS enabled, so it can be called directly from browsers. The development key `1` is rate-limited and capped at roughly 100 results per query; multi-ingredient filtering, popular / latest endpoints, and the image API methods are gated behind the Premium tier.

## Try it

**TypeScript**
```bash
npm install cocktail-recipe
```

**Python**
```bash
pip install cocktail-recipe-sdk
```

**PHP**
```bash
composer require voxgig/cocktail-recipe-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/cocktail-recipe-sdk/go
```

**Ruby**
```bash
gem install cocktail-recipe-sdk
```

**Lua**
```bash
luarocks install cocktail-recipe-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CocktailRecipeSDK } from 'cocktail-recipe'

const client = new CocktailRecipeSDK({})

// List all filters
const filters = await client.Filter().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o cocktail-recipe-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "cocktail-recipe": {
      "command": "/abs/path/to/cocktail-recipe-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Filter** | Filter drink lists by a single attribute such as ingredient, alcoholic status, category, or glass via `filter.php` (e.g. `filter.php?i=Gin`, `filter.php?a=Alcoholic`, `filter.php?c=Cocktail`, `filter.php?g=Cocktail_glass`). | `/filter.php` |
| **List** | Enumerate the controlled vocabularies used by the filter endpoints — categories, glasses, ingredients, and alcoholic/non-alcoholic values — via `list.php` (e.g. `list.php?c=list`). | `/list.php` |
| **Lookup** | Retrieve a full record by ID — a cocktail by drink ID or an ingredient by ingredient ID — via `lookup.php` (e.g. `lookup.php?i=11007`, `lookup.php?iid=552`). | `/lookup.php` |
| **Random** | Return a single randomly chosen cocktail with its full recipe via `random.php`. | `/random.php` |
| **Search** | Search cocktails by name or first letter, or search ingredients by name via `search.php` (e.g. `search.php?s=margarita`, `search.php?f=a`, `search.php?i=vodka`). | `/search.php` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from cocktailrecipe_sdk import CocktailRecipeSDK

client = CocktailRecipeSDK({})

# List all filters
filters, err = client.Filter(None).list(None, None)
```

### PHP

```php
<?php
require_once 'cocktailrecipe_sdk.php';

$client = new CocktailRecipeSDK([]);

// List all filters
[$filters, $err] = $client->Filter(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/cocktail-recipe-sdk/go"

client := sdk.NewCocktailRecipeSDK(map[string]any{})

// List all filters
filters, err := client.Filter(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "CocktailRecipe_sdk"

client = CocktailRecipeSDK.new({})

# List all filters
filters, err = client.Filter(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("cocktail-recipe_sdk")

local client = sdk.new({})

-- List all filters
local filters, err = client:Filter(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CocktailRecipeSDK.test()
const result = await client.Filter().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CocktailRecipeSDK.test(None, None)
result, err = client.Filter(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CocktailRecipeSDK::test(null, null);
[$result, $err] = $client->Filter(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Filter(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CocktailRecipeSDK.test(nil, nil)
result, err = client.Filter(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Filter(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Cocktail Recipe API

- Upstream: [https://www.thecocktaildb.com/](https://www.thecocktaildb.com/)
- API docs: [https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php)

- Free basic access using the development test key `1` (URL path `/api/json/v1/1`).
- Production / commercial use requires a Premium API subscription via [TheCocktailDB](https://www.thecocktaildb.com/api.php).
- Premium-only features include multi-ingredient filtering, popular/recent lookups, image API methods, and full database access beyond the 100-item limit.
- Attribution to TheCocktailDB is appreciated; check the site's terms for the current policy before redistributing data or images.

---

Generated from the Cocktail Recipe API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
