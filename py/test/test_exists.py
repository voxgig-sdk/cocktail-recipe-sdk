# ProjectName SDK exists test

import pytest
from cocktailrecipe_sdk import CocktailRecipeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CocktailRecipeSDK.test(None, None)
        assert testsdk is not None
