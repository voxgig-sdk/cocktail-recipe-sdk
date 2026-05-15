# CocktailRecipe SDK feature factory

from feature.base_feature import CocktailRecipeBaseFeature
from feature.test_feature import CocktailRecipeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CocktailRecipeBaseFeature(),
        "test": lambda: CocktailRecipeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
