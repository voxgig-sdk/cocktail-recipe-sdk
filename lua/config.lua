-- CocktailRecipe SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CocktailRecipe",
      slug = "cocktail-recipe",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://www.thecocktaildb.com/api/json/v1/1",
      auth = {
        prefix = "",
        ["in"] = "path",
        name = "apiKey",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["filter"] = {},
        ["list"] = {},
        ["lookup"] = {},
        ["random"] = {},
        ["search"] = {},
      },
    },
    entity = {
      ["filter"] = {
        ["fields"] = {
          {
            ["name"] = "idDrink",
            ["title"] = "Id Drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strDrink",
            ["title"] = "Str Drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strDrinkThumb",
            ["title"] = "Str Drink Thumb",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "filter",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/filter.php",
                ["segments"] = {
                  {
                    ["lit"] = "filter.php",
                  },
                },
                ["parts"] = {
                  "filter.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "a",
                      ["orig"] = "a",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "Alcoholic",
                    },
                    {
                      ["name"] = "c",
                      ["orig"] = "c",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "Ordinary_Drink",
                    },
                    {
                      ["name"] = "g",
                      ["orig"] = "g",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "Cocktail_glass",
                    },
                    {
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "Gin",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "a",
                    "c",
                    "g",
                    "i",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["list"] = {
        ["fields"] = {
          {
            ["name"] = "drinks",
            ["title"] = "Drinks",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "strAlcoholic",
            ["title"] = "Str Alcoholic",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strCategory",
            ["title"] = "Str Category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strGlass",
            ["title"] = "Str Glass",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strIngredient1",
            ["title"] = "Str Ingredient1",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/list.php",
                ["segments"] = {
                  {
                    ["lit"] = "list.php",
                  },
                },
                ["parts"] = {
                  "list.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "a",
                      ["orig"] = "a",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "list",
                    },
                    {
                      ["name"] = "c",
                      ["orig"] = "c",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "list",
                    },
                    {
                      ["name"] = "g",
                      ["orig"] = "g",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "list",
                    },
                    {
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "list",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "a",
                    "c",
                    "g",
                    "i",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/latest.php",
                ["segments"] = {
                  {
                    ["lit"] = "latest.php",
                  },
                },
                ["parts"] = {
                  "latest.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/popular.php",
                ["segments"] = {
                  {
                    ["lit"] = "popular.php",
                  },
                },
                ["parts"] = {
                  "popular.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["lookup"] = {
        ["fields"] = {
          {
            ["name"] = "drinks",
            ["title"] = "Drinks",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "ingredients",
            ["title"] = "Ingredients",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "lookup",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lookup.php",
                ["segments"] = {
                  {
                    ["lit"] = "lookup.php",
                  },
                },
                ["parts"] = {
                  "lookup.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "11007",
                    },
                    {
                      ["name"] = "iid",
                      ["orig"] = "iid",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "552",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "i",
                    "iid",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["random"] = {
        ["fields"] = {
          {
            ["name"] = "drinks",
            ["title"] = "Drinks",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idDrink",
            ["title"] = "Id Drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strAlcoholic",
            ["title"] = "Str Alcoholic",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strCategory",
            ["title"] = "Str Category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strDrink",
            ["title"] = "Str Drink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strDrinkThumb",
            ["title"] = "Str Drink Thumb",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strGlass",
            ["title"] = "Str Glass",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strIngredient1",
            ["title"] = "Str Ingredient1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strIngredient2",
            ["title"] = "Str Ingredient2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strInstructions",
            ["title"] = "Str Instructions",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strMeasure1",
            ["title"] = "Str Measure1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strMeasure2",
            ["title"] = "Str Measure2",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "random",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random.php",
                ["segments"] = {
                  {
                    ["lit"] = "random.php",
                  },
                },
                ["parts"] = {
                  "random.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/randomselection.php",
                ["segments"] = {
                  {
                    ["lit"] = "randomselection.php",
                  },
                },
                ["parts"] = {
                  "randomselection.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "drinks",
            ["title"] = "Drinks",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "ingredients",
            ["title"] = "Ingredients",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search.php",
                ["segments"] = {
                  {
                    ["lit"] = "search.php",
                  },
                },
                ["parts"] = {
                  "search.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "f",
                      ["orig"] = "f",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "a",
                    },
                    {
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "vodka",
                    },
                    {
                      ["name"] = "s",
                      ["orig"] = "s",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "margarita",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "f",
                    "i",
                    "s",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
