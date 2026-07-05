# CocktailRecipe TypeScript SDK



The TypeScript SDK for the CocktailRecipe API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Filter()` — each with a small set of operations (`list`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cocktail-recipe-sdk/releases](https://github.com/voxgig-sdk/cocktail-recipe-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CocktailRecipeSDK } from '@voxgig-sdk/cocktail-recipe'

const client = new CocktailRecipeSDK({
  apikey: process.env.COCKTAIL_RECIPE_APIKEY,
})
```

### 2. List filter records

`list()` resolves to an array of Filter objects — iterate it directly:

```ts
const filters = await client.Filter().list()

for (const filter of filters) {
  console.log(filter)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const filters = await client.Filter().list()
  console.log(filters)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CocktailRecipeSDK.test()

const filter = await client.Filter().list()
// filter is a bare entity populated with mock response data
console.log(filter)
```

You can also use the instance method:

```ts
const client = new CocktailRecipeSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Filter()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CocktailRecipeSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### CocktailRecipeSDK

#### Constructor

```ts
new CocktailRecipeSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Filter(data?)` | `FilterEntity` | Create a Filter entity instance. |
| `List(data?)` | `ListEntity` | Create a List entity instance. |
| `Lookup(data?)` | `LookupEntity` | Create a Lookup entity instance. |
| `Random(data?)` | `RandomEntity` | Create a Random entity instance. |
| `Search(data?)` | `SearchEntity` | Create a Search entity instance. |
| `tester(testopts?, sdkopts?)` | `CocktailRecipeSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CocktailRecipeSDK.test(testopts?, sdkopts?)` | `CocktailRecipeSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CocktailRecipeSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Filter

| Field | Description |
| --- | --- |
| `id_drink` |  |
| `str_drink` |  |
| `str_drink_thumb` |  |

Operations: list.

API path: `/filter.php`

#### List

| Field | Description |
| --- | --- |
| `drink` |  |
| `str_alcoholic` |  |
| `str_category` |  |
| `str_glass` |  |
| `str_ingredient1` |  |

Operations: list.

API path: `/list.php`

#### Lookup

| Field | Description |
| --- | --- |
| `drink` |  |
| `ingredient` |  |

Operations: list.

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

Operations: list.

API path: `/random.php`

#### Search

| Field | Description |
| --- | --- |
| `drink` |  |
| `ingredient` |  |

Operations: list.

API path: `/search.php`



## Entities


### Filter

Create an instance: `const filter = client.Filter()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id_drink` | `string` |  |
| `str_drink` | `string` |  |
| `str_drink_thumb` | `string` |  |

#### Example: List

```ts
const filters = await client.Filter().list()
```


### List

Create an instance: `const list = client.List()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `any[]` |  |
| `str_alcoholic` | `string` |  |
| `str_category` | `string` |  |
| `str_glass` | `string` |  |
| `str_ingredient1` | `string` |  |

#### Example: List

```ts
const lists = await client.List().list()
```


### Lookup

Create an instance: `const lookup = client.Lookup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `any[]` |  |
| `ingredient` | `any[]` |  |

#### Example: List

```ts
const lookups = await client.Lookup().list()
```


### Random

Create an instance: `const random = client.Random()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `any[]` |  |
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

```ts
const randoms = await client.Random().list()
```


### Search

Create an instance: `const search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `drink` | `any[]` |  |
| `ingredient` | `any[]` |  |

#### Example: List

```ts
const searchs = await client.Search().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cocktail-recipe/
├── src/
│   ├── CocktailRecipeSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CocktailRecipeSDK } from '@voxgig-sdk/cocktail-recipe'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const filter = client.Filter()
await filter.list()

// filter.data() now returns the filter data from the last `list`
// filter.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
