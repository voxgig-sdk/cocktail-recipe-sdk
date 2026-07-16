<?php
declare(strict_types=1);

// CocktailRecipe SDK base feature

class CocktailRecipeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CocktailRecipeContext $ctx, array $options): void {}
    public function PostConstruct(CocktailRecipeContext $ctx): void {}
    public function PostConstructEntity(CocktailRecipeContext $ctx): void {}
    public function SetData(CocktailRecipeContext $ctx): void {}
    public function GetData(CocktailRecipeContext $ctx): void {}
    public function GetMatch(CocktailRecipeContext $ctx): void {}
    public function SetMatch(CocktailRecipeContext $ctx): void {}
    public function PrePoint(CocktailRecipeContext $ctx): void {}
    public function PreSpec(CocktailRecipeContext $ctx): void {}
    public function PreRequest(CocktailRecipeContext $ctx): void {}
    public function PreResponse(CocktailRecipeContext $ctx): void {}
    public function PreResult(CocktailRecipeContext $ctx): void {}
    public function PreDone(CocktailRecipeContext $ctx): void {}
    public function PreUnexpected(CocktailRecipeContext $ctx): void {}
}
