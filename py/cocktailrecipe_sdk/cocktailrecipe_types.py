# Typed models for the CocktailRecipe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Filter(TypedDict, total=False):
    idDrink: str
    strDrink: str
    strDrinkThumb: str


class FilterListMatch(TypedDict, total=False):
    idDrink: str
    strDrink: str
    strDrinkThumb: str


class List(TypedDict, total=False):
    drinks: list
    strAlcoholic: str
    strCategory: str
    strGlass: str
    strIngredient1: str


class ListListMatch(TypedDict, total=False):
    drinks: list
    strAlcoholic: str
    strCategory: str
    strGlass: str
    strIngredient1: str


class Lookup(TypedDict, total=False):
    drinks: list
    ingredients: list


class LookupListMatch(TypedDict, total=False):
    drinks: list
    ingredients: list


class Random(TypedDict, total=False):
    drinks: list
    idDrink: str
    strAlcoholic: str
    strCategory: str
    strDrink: str
    strDrinkThumb: str
    strGlass: str
    strIngredient1: str
    strIngredient2: str
    strInstructions: str
    strMeasure1: str
    strMeasure2: str


class RandomListMatch(TypedDict, total=False):
    drinks: list
    idDrink: str
    strAlcoholic: str
    strCategory: str
    strDrink: str
    strDrinkThumb: str
    strGlass: str
    strIngredient1: str
    strIngredient2: str
    strInstructions: str
    strMeasure1: str
    strMeasure2: str


class Search(TypedDict, total=False):
    drinks: list
    ingredients: list


class SearchListMatch(TypedDict, total=False):
    drinks: list
    ingredients: list
