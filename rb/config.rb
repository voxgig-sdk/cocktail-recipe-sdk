# CocktailRecipe SDK configuration

module CocktailRecipeConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CocktailRecipe",
        "slug" => "cocktail-recipe",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.thecocktaildb.com/api/json/v1/1",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "filter" => {},
          "list" => {},
          "lookup" => {},
          "random" => {},
          "search" => {},
        },
      },
      "entity" => {
        "filter" => {
          "fields" => [
            {
              "name" => "idDrink",
              "type" => "`$STRING`",
            },
            {
              "name" => "strDrink",
              "type" => "`$STRING`",
            },
            {
              "name" => "strDrinkThumb",
              "type" => "`$STRING`",
            },
          ],
          "name" => "filter",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "Alcoholic",
                        "kind" => "query",
                        "name" => "a",
                        "orig" => "a",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "Ordinary_Drink",
                        "kind" => "query",
                        "name" => "c",
                        "orig" => "c",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "Cocktail_glass",
                        "kind" => "query",
                        "name" => "g",
                        "orig" => "g",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "Gin",
                        "kind" => "query",
                        "name" => "i",
                        "orig" => "i",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/filter.php",
                  "segments" => [
                    {
                      "lit" => "filter.php",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "a",
                      "c",
                      "g",
                      "i",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.drinks`",
                  },
                  "parts" => [
                    "filter.php",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "list" => {
          "fields" => [
            {
              "name" => "drinks",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "strAlcoholic",
              "type" => "`$STRING`",
            },
            {
              "name" => "strCategory",
              "type" => "`$STRING`",
            },
            {
              "name" => "strGlass",
              "type" => "`$STRING`",
            },
            {
              "name" => "strIngredient1",
              "type" => "`$STRING`",
            },
          ],
          "name" => "list",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "list",
                        "kind" => "query",
                        "name" => "a",
                        "orig" => "a",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "list",
                        "kind" => "query",
                        "name" => "c",
                        "orig" => "c",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "list",
                        "kind" => "query",
                        "name" => "g",
                        "orig" => "g",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "list",
                        "kind" => "query",
                        "name" => "i",
                        "orig" => "i",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/list.php",
                  "segments" => [
                    {
                      "lit" => "list.php",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "a",
                      "c",
                      "g",
                      "i",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.drinks`",
                  },
                  "parts" => [
                    "list.php",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/latest.php",
                  "segments" => [
                    {
                      "lit" => "latest.php",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.drinks`",
                  },
                  "parts" => [
                    "latest.php",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/popular.php",
                  "segments" => [
                    {
                      "lit" => "popular.php",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.drinks`",
                  },
                  "parts" => [
                    "popular.php",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "lookup" => {
          "fields" => [
            {
              "name" => "drinks",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "ingredients",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "lookup",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "11007",
                        "kind" => "query",
                        "name" => "i",
                        "orig" => "i",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "552",
                        "kind" => "query",
                        "name" => "iid",
                        "orig" => "iid",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/lookup.php",
                  "segments" => [
                    {
                      "lit" => "lookup.php",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "i",
                      "iid",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "lookup.php",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "random" => {
          "fields" => [
            {
              "name" => "drinks",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "idDrink",
              "type" => "`$STRING`",
            },
            {
              "name" => "strAlcoholic",
              "type" => "`$STRING`",
            },
            {
              "name" => "strCategory",
              "type" => "`$STRING`",
            },
            {
              "name" => "strDrink",
              "type" => "`$STRING`",
            },
            {
              "name" => "strDrinkThumb",
              "type" => "`$STRING`",
            },
            {
              "name" => "strGlass",
              "type" => "`$STRING`",
            },
            {
              "name" => "strIngredient1",
              "type" => "`$STRING`",
            },
            {
              "name" => "strIngredient2",
              "type" => "`$STRING`",
            },
            {
              "name" => "strInstructions",
              "type" => "`$STRING`",
            },
            {
              "name" => "strMeasure1",
              "type" => "`$STRING`",
            },
            {
              "name" => "strMeasure2",
              "type" => "`$STRING`",
            },
          ],
          "name" => "random",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random.php",
                  "segments" => [
                    {
                      "lit" => "random.php",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.drinks`",
                  },
                  "parts" => [
                    "random.php",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/randomselection.php",
                  "segments" => [
                    {
                      "lit" => "randomselection.php",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.drinks`",
                  },
                  "parts" => [
                    "randomselection.php",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "drinks",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "ingredients",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "a",
                        "kind" => "query",
                        "name" => "f",
                        "orig" => "f",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "vodka",
                        "kind" => "query",
                        "name" => "i",
                        "orig" => "i",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "margarita",
                        "kind" => "query",
                        "name" => "s",
                        "orig" => "s",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search.php",
                  "segments" => [
                    {
                      "lit" => "search.php",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "f",
                      "i",
                      "s",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "search.php",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CocktailRecipeFeatures.make_feature(name)
  end
end
