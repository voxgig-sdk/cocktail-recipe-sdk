<?php
declare(strict_types=1);

// Typed models for the CocktailRecipe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Filter entity data model. */
class Filter
{
    public ?string $id_drink = null;
    public ?string $str_drink = null;
    public ?string $str_drink_thumb = null;
}

/** Request payload for Filter#list. */
class FilterListMatch
{
    public ?string $id_drink = null;
    public ?string $str_drink = null;
    public ?string $str_drink_thumb = null;
}

/** List entity data model. */
class List
{
    public ?array $drink = null;
    public ?string $str_alcoholic = null;
    public ?string $str_category = null;
    public ?string $str_glass = null;
    public ?string $str_ingredient1 = null;
}

/** Request payload for List#list. */
class ListListMatch
{
    public ?array $drink = null;
    public ?string $str_alcoholic = null;
    public ?string $str_category = null;
    public ?string $str_glass = null;
    public ?string $str_ingredient1 = null;
}

/** Lookup entity data model. */
class Lookup
{
    public ?array $drink = null;
    public ?array $ingredient = null;
}

/** Request payload for Lookup#list. */
class LookupListMatch
{
    public ?array $drink = null;
    public ?array $ingredient = null;
}

/** Random entity data model. */
class Random
{
    public ?array $drink = null;
    public ?string $id_drink = null;
    public ?string $str_alcoholic = null;
    public ?string $str_category = null;
    public ?string $str_drink = null;
    public ?string $str_drink_thumb = null;
    public ?string $str_glass = null;
    public ?string $str_ingredient1 = null;
    public ?string $str_ingredient2 = null;
    public ?string $str_instruction = null;
    public ?string $str_measure1 = null;
    public ?string $str_measure2 = null;
}

/** Request payload for Random#list. */
class RandomListMatch
{
    public ?array $drink = null;
    public ?string $id_drink = null;
    public ?string $str_alcoholic = null;
    public ?string $str_category = null;
    public ?string $str_drink = null;
    public ?string $str_drink_thumb = null;
    public ?string $str_glass = null;
    public ?string $str_ingredient1 = null;
    public ?string $str_ingredient2 = null;
    public ?string $str_instruction = null;
    public ?string $str_measure1 = null;
    public ?string $str_measure2 = null;
}

/** Search entity data model. */
class Search
{
    public ?array $drink = null;
    public ?array $ingredient = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?array $drink = null;
    public ?array $ingredient = null;
}

