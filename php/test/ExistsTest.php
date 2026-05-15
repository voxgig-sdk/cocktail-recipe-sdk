<?php
declare(strict_types=1);

// CocktailRecipe SDK exists test

require_once __DIR__ . '/../cocktailrecipe_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CocktailRecipeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
