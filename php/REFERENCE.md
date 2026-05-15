# CocktailRecipe PHP SDK Reference

Complete API reference for the CocktailRecipe PHP SDK.


## CocktailRecipeSDK

### Constructor

```php
require_once __DIR__ . '/cocktail-recipe_sdk.php';

$client = new CocktailRecipeSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CocktailRecipeSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CocktailRecipeSDK::test();
```


### Instance Methods

#### `Filter($data = null)`

Create a new `FilterEntity` instance. Pass `null` for no initial data.

#### `List($data = null)`

Create a new `ListEntity` instance. Pass `null` for no initial data.

#### `Lookup($data = null)`

Create a new `LookupEntity` instance. Pass `null` for no initial data.

#### `Random($data = null)`

Create a new `RandomEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## FilterEntity

```php
$filter = $client->Filter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id_drink` | ``$STRING`` | No |  |
| `str_drink` | ``$STRING`` | No |  |
| `str_drink_thumb` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Filter()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): FilterEntity`

Create a new `FilterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ListEntity

```php
$list = $client->List();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->List()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ListEntity`

Create a new `ListEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## LookupEntity

```php
$lookup = $client->Lookup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drink` | ``$ARRAY`` | No |  |
| `ingredient` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Lookup()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): LookupEntity`

Create a new `LookupEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RandomEntity

```php
$random = $client->Random();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Random()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RandomEntity`

Create a new `RandomEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `drink` | ``$ARRAY`` | No |  |
| `ingredient` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Search()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CocktailRecipeSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

