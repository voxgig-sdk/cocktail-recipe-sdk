# CocktailRecipe SDK utility: make_context

from core.context import CocktailRecipeContext


def make_context_util(ctxmap, basectx):
    return CocktailRecipeContext(ctxmap, basectx)
