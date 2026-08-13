# CocktailRecipe SDK utility: make_context

from projectname_sdk.core.context import CocktailRecipeContext


def make_context_util(ctxmap, basectx):
    return CocktailRecipeContext(ctxmap, basectx)
