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
    id_drink: str
    str_drink: str
    str_drink_thumb: str


class FilterListMatch(TypedDict, total=False):
    id_drink: str
    str_drink: str
    str_drink_thumb: str


class List(TypedDict, total=False):
    drink: list
    str_alcoholic: str
    str_category: str
    str_glass: str
    str_ingredient1: str


class ListListMatch(TypedDict, total=False):
    drink: list
    str_alcoholic: str
    str_category: str
    str_glass: str
    str_ingredient1: str


class Lookup(TypedDict, total=False):
    drink: list
    ingredient: list


class LookupListMatch(TypedDict, total=False):
    drink: list
    ingredient: list


class Random(TypedDict, total=False):
    drink: list
    id_drink: str
    str_alcoholic: str
    str_category: str
    str_drink: str
    str_drink_thumb: str
    str_glass: str
    str_ingredient1: str
    str_ingredient2: str
    str_instruction: str
    str_measure1: str
    str_measure2: str


class RandomListMatch(TypedDict, total=False):
    drink: list
    id_drink: str
    str_alcoholic: str
    str_category: str
    str_drink: str
    str_drink_thumb: str
    str_glass: str
    str_ingredient1: str
    str_ingredient2: str
    str_instruction: str
    str_measure1: str
    str_measure2: str


class Search(TypedDict, total=False):
    drink: list
    ingredient: list


class SearchListMatch(TypedDict, total=False):
    drink: list
    ingredient: list
