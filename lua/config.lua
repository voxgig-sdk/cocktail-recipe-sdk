-- CocktailRecipe SDK configuration

local function make_config()
  return {
    main = {
      name = "CocktailRecipe",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://www.thecocktaildb.com/api/json/v1/1",
      auth = {
        prefix = "",
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
            ["active"] = true,
            ["name"] = "idDrink",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "strDrink",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "strDrinkThumb",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "filter",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "Alcoholic",
                      ["kind"] = "query",
                      ["name"] = "a",
                      ["orig"] = "a",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "Ordinary_Drink",
                      ["kind"] = "query",
                      ["name"] = "c",
                      ["orig"] = "c",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "Cocktail_glass",
                      ["kind"] = "query",
                      ["name"] = "g",
                      ["orig"] = "g",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "Gin",
                      ["kind"] = "query",
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/filter.php",
                ["parts"] = {
                  "filter.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "a",
                    "c",
                    "g",
                    "i",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["list"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "drinks",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "strAlcoholic",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "strCategory",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "strGlass",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "strIngredient1",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
        },
        ["name"] = "list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "list",
                      ["kind"] = "query",
                      ["name"] = "a",
                      ["orig"] = "a",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "list",
                      ["kind"] = "query",
                      ["name"] = "c",
                      ["orig"] = "c",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "list",
                      ["kind"] = "query",
                      ["name"] = "g",
                      ["orig"] = "g",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "list",
                      ["kind"] = "query",
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/list.php",
                ["parts"] = {
                  "list.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "a",
                    "c",
                    "g",
                    "i",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/latest.php",
                ["parts"] = {
                  "latest.php",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["index$"] = 1,
              },
              {
                ["active"] = true,
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/popular.php",
                ["parts"] = {
                  "popular.php",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["index$"] = 2,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["lookup"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "drinks",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "ingredients",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
        },
        ["name"] = "lookup",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "11007",
                      ["kind"] = "query",
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "552",
                      ["kind"] = "query",
                      ["name"] = "iid",
                      ["orig"] = "iid",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lookup.php",
                ["parts"] = {
                  "lookup.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "i",
                    "iid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["random"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "drinks",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "idDrink",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "strAlcoholic",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "strCategory",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "strDrink",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "strDrinkThumb",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "strGlass",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "strIngredient1",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "strIngredient2",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "strInstructions",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "strMeasure1",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "strMeasure2",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
        },
        ["name"] = "random",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random.php",
                ["parts"] = {
                  "random.php",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/randomselection.php",
                ["parts"] = {
                  "randomselection.php",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.drinks`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "drinks",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "ingredients",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "a",
                      ["kind"] = "query",
                      ["name"] = "f",
                      ["orig"] = "f",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "vodka",
                      ["kind"] = "query",
                      ["name"] = "i",
                      ["orig"] = "i",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "margarita",
                      ["kind"] = "query",
                      ["name"] = "s",
                      ["orig"] = "s",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search.php",
                ["parts"] = {
                  "search.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "f",
                    "i",
                    "s",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
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
