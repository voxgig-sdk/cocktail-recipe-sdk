# CocktailRecipe SDK feature factory

from cocktailrecipe_sdk.feature.base_feature import CocktailRecipeBaseFeature
from cocktailrecipe_sdk.feature.ratelimit_feature import CocktailRecipeRatelimitFeature
from cocktailrecipe_sdk.feature.retry_feature import CocktailRecipeRetryFeature
from cocktailrecipe_sdk.feature.test_feature import CocktailRecipeTestFeature
from cocktailrecipe_sdk.feature.timeout_feature import CocktailRecipeTimeoutFeature


_FEATURES = {
    "base": lambda: CocktailRecipeBaseFeature(),
    "ratelimit": lambda: CocktailRecipeRatelimitFeature(),
    "retry": lambda: CocktailRecipeRetryFeature(),
    "test": lambda: CocktailRecipeTestFeature(),
    "timeout": lambda: CocktailRecipeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
