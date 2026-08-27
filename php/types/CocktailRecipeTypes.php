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
    public ?string $idDrink = null;
    public ?string $strDrink = null;
    public ?string $strDrinkThumb = null;
}

/** Request payload for Filter#list. */
class FilterListMatch
{
    public ?string $a = null;
    public ?string $c = null;
    public ?string $g = null;
    public ?string $i = null;
}

/** List entity data model. */
class ListType
{
    public ?array $drinks = null;
    public ?string $strAlcoholic = null;
    public ?string $strCategory = null;
    public ?string $strGlass = null;
    public ?string $strIngredient1 = null;
}

/** Request payload for List#list. */
class ListListMatch
{
    public ?string $a = null;
    public ?string $c = null;
    public ?string $g = null;
    public ?string $i = null;
}

/** Lookup entity data model. */
class Lookup
{
    public ?array $drinks = null;
    public ?array $ingredients = null;
}

/** Request payload for Lookup#list. */
class LookupListMatch
{
    public ?string $i = null;
    public ?string $iid = null;
}

/** Random entity data model. */
class Random
{
    public ?array $drinks = null;
    public ?string $idDrink = null;
    public ?string $strAlcoholic = null;
    public ?string $strCategory = null;
    public ?string $strDrink = null;
    public ?string $strDrinkThumb = null;
    public ?string $strGlass = null;
    public ?string $strIngredient1 = null;
    public ?string $strIngredient2 = null;
    public ?string $strInstructions = null;
    public ?string $strMeasure1 = null;
    public ?string $strMeasure2 = null;
}

/** Request payload for Random#list. */
class RandomListMatch
{
    public ?array $drinks = null;
    public ?string $idDrink = null;
    public ?string $strAlcoholic = null;
    public ?string $strCategory = null;
    public ?string $strDrink = null;
    public ?string $strDrinkThumb = null;
    public ?string $strGlass = null;
    public ?string $strIngredient1 = null;
    public ?string $strIngredient2 = null;
    public ?string $strInstructions = null;
    public ?string $strMeasure1 = null;
    public ?string $strMeasure2 = null;
}

/** Search entity data model. */
class Search
{
    public ?array $drinks = null;
    public ?array $ingredients = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?string $f = null;
    public ?string $i = null;
    public ?string $s = null;
}

