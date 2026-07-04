# Typed models for the CocktailRecipe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Filter:
    id_drink: Optional[str] = None
    str_drink: Optional[str] = None
    str_drink_thumb: Optional[str] = None


@dataclass
class FilterListMatch:
    id_drink: Optional[str] = None
    str_drink: Optional[str] = None
    str_drink_thumb: Optional[str] = None


@dataclass
class List:
    drink: Optional[list] = None
    str_alcoholic: Optional[str] = None
    str_category: Optional[str] = None
    str_glass: Optional[str] = None
    str_ingredient1: Optional[str] = None


@dataclass
class ListListMatch:
    drink: Optional[list] = None
    str_alcoholic: Optional[str] = None
    str_category: Optional[str] = None
    str_glass: Optional[str] = None
    str_ingredient1: Optional[str] = None


@dataclass
class Lookup:
    drink: Optional[list] = None
    ingredient: Optional[list] = None


@dataclass
class LookupListMatch:
    drink: Optional[list] = None
    ingredient: Optional[list] = None


@dataclass
class Random:
    drink: Optional[list] = None
    id_drink: Optional[str] = None
    str_alcoholic: Optional[str] = None
    str_category: Optional[str] = None
    str_drink: Optional[str] = None
    str_drink_thumb: Optional[str] = None
    str_glass: Optional[str] = None
    str_ingredient1: Optional[str] = None
    str_ingredient2: Optional[str] = None
    str_instruction: Optional[str] = None
    str_measure1: Optional[str] = None
    str_measure2: Optional[str] = None


@dataclass
class RandomListMatch:
    drink: Optional[list] = None
    id_drink: Optional[str] = None
    str_alcoholic: Optional[str] = None
    str_category: Optional[str] = None
    str_drink: Optional[str] = None
    str_drink_thumb: Optional[str] = None
    str_glass: Optional[str] = None
    str_ingredient1: Optional[str] = None
    str_ingredient2: Optional[str] = None
    str_instruction: Optional[str] = None
    str_measure1: Optional[str] = None
    str_measure2: Optional[str] = None


@dataclass
class Search:
    drink: Optional[list] = None
    ingredient: Optional[list] = None


@dataclass
class SearchListMatch:
    drink: Optional[list] = None
    ingredient: Optional[list] = None

