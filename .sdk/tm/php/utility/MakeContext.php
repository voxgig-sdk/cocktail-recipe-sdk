<?php
declare(strict_types=1);

// CocktailRecipe SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CocktailRecipeMakeContext
{
    public static function call(array $ctxmap, ?CocktailRecipeContext $basectx): CocktailRecipeContext
    {
        return new CocktailRecipeContext($ctxmap, $basectx);
    }
}
