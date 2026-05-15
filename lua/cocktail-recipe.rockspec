package = "voxgig-sdk-cocktail-recipe"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/cocktail-recipe-sdk.git"
}
description = {
  summary = "CocktailRecipe SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["cocktail-recipe_sdk"] = "cocktail-recipe_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
