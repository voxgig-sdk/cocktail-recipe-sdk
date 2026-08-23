# CocktailRecipe SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CocktailRecipe",
            "slug": "cocktail-recipe",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.thecocktaildb.com/api/json/v1/1",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "filter": {},
                "list": {},
                "lookup": {},
                "random": {},
                "search": {},
            },
        },
        "entity": {
      "filter": {
        "fields": [
          {
            "name": "idDrink",
            "type": "`$STRING`",
          },
          {
            "name": "strDrink",
            "type": "`$STRING`",
          },
          {
            "name": "strDrinkThumb",
            "type": "`$STRING`",
          },
        ],
        "name": "filter",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "Alcoholic",
                      "kind": "query",
                      "name": "a",
                      "orig": "a",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "Ordinary_Drink",
                      "kind": "query",
                      "name": "c",
                      "orig": "c",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "Cocktail_glass",
                      "kind": "query",
                      "name": "g",
                      "orig": "g",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "Gin",
                      "kind": "query",
                      "name": "i",
                      "orig": "i",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/filter.php",
                "parts": [
                  "filter.php",
                ],
                "select": {
                  "exist": [
                    "a",
                    "c",
                    "g",
                    "i",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.drinks`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list": {
        "fields": [
          {
            "name": "drinks",
            "type": "`$ARRAY`",
          },
          {
            "name": "strAlcoholic",
            "type": "`$STRING`",
          },
          {
            "name": "strCategory",
            "type": "`$STRING`",
          },
          {
            "name": "strGlass",
            "type": "`$STRING`",
          },
          {
            "name": "strIngredient1",
            "type": "`$STRING`",
          },
        ],
        "name": "list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "list",
                      "kind": "query",
                      "name": "a",
                      "orig": "a",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "list",
                      "kind": "query",
                      "name": "c",
                      "orig": "c",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "list",
                      "kind": "query",
                      "name": "g",
                      "orig": "g",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "list",
                      "kind": "query",
                      "name": "i",
                      "orig": "i",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/list.php",
                "parts": [
                  "list.php",
                ],
                "select": {
                  "exist": [
                    "a",
                    "c",
                    "g",
                    "i",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.drinks`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/latest.php",
                "parts": [
                  "latest.php",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.drinks`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/popular.php",
                "parts": [
                  "popular.php",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.drinks`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "lookup": {
        "fields": [
          {
            "name": "drinks",
            "type": "`$ARRAY`",
          },
          {
            "name": "ingredients",
            "type": "`$ARRAY`",
          },
        ],
        "name": "lookup",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "11007",
                      "kind": "query",
                      "name": "i",
                      "orig": "i",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "552",
                      "kind": "query",
                      "name": "iid",
                      "orig": "iid",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/lookup.php",
                "parts": [
                  "lookup.php",
                ],
                "select": {
                  "exist": [
                    "i",
                    "iid",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "random": {
        "fields": [
          {
            "name": "drinks",
            "type": "`$ARRAY`",
          },
          {
            "name": "idDrink",
            "type": "`$STRING`",
          },
          {
            "name": "strAlcoholic",
            "type": "`$STRING`",
          },
          {
            "name": "strCategory",
            "type": "`$STRING`",
          },
          {
            "name": "strDrink",
            "type": "`$STRING`",
          },
          {
            "name": "strDrinkThumb",
            "type": "`$STRING`",
          },
          {
            "name": "strGlass",
            "type": "`$STRING`",
          },
          {
            "name": "strIngredient1",
            "type": "`$STRING`",
          },
          {
            "name": "strIngredient2",
            "type": "`$STRING`",
          },
          {
            "name": "strInstructions",
            "type": "`$STRING`",
          },
          {
            "name": "strMeasure1",
            "type": "`$STRING`",
          },
          {
            "name": "strMeasure2",
            "type": "`$STRING`",
          },
        ],
        "name": "random",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/random.php",
                "parts": [
                  "random.php",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.drinks`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/randomselection.php",
                "parts": [
                  "randomselection.php",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.drinks`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "drinks",
            "type": "`$ARRAY`",
          },
          {
            "name": "ingredients",
            "type": "`$ARRAY`",
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "a",
                      "kind": "query",
                      "name": "f",
                      "orig": "f",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "vodka",
                      "kind": "query",
                      "name": "i",
                      "orig": "i",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "margarita",
                      "kind": "query",
                      "name": "s",
                      "orig": "s",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search.php",
                "parts": [
                  "search.php",
                ],
                "select": {
                  "exist": [
                    "f",
                    "i",
                    "s",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
