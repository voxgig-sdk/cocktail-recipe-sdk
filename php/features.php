<?php
declare(strict_types=1);

// CocktailRecipe SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CocktailRecipeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CocktailRecipeBaseFeature();
            case "test":
                return new CocktailRecipeTestFeature();
            default:
                return new CocktailRecipeBaseFeature();
        }
    }
}
