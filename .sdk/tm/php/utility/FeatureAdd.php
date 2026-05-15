<?php
declare(strict_types=1);

// CocktailRecipe SDK utility: feature_add

class CocktailRecipeFeatureAdd
{
    public static function call(CocktailRecipeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
