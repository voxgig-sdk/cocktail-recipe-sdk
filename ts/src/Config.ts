
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'CocktailRecipe',
        slug: "cocktail-recipe",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://www.thecocktaildb.com/api/json/v1/1",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      filter: {
      },

      list: {
      },

      lookup: {
      },

      random: {
      },

      search: {
      },

    }
  }


  entity = {
    "filter": {
      "fields": [
        {
          "name": "idDrink",
          "type": "`$STRING`"
        },
        {
          "name": "strDrink",
          "type": "`$STRING`"
        },
        {
          "name": "strDrinkThumb",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "Ordinary_Drink",
                    "kind": "query",
                    "name": "c",
                    "orig": "c",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "Cocktail_glass",
                    "kind": "query",
                    "name": "g",
                    "orig": "g",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "Gin",
                    "kind": "query",
                    "name": "i",
                    "orig": "i",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/filter.php",
              "segments": [
                {
                  "lit": "filter.php"
                }
              ],
              "select": {
                "exist": [
                  "a",
                  "c",
                  "g",
                  "i"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.drinks`"
              },
              "parts": [
                "filter.php"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list": {
      "fields": [
        {
          "name": "drinks",
          "type": "`$ARRAY`"
        },
        {
          "name": "strAlcoholic",
          "type": "`$STRING`"
        },
        {
          "name": "strCategory",
          "type": "`$STRING`"
        },
        {
          "name": "strGlass",
          "type": "`$STRING`"
        },
        {
          "name": "strIngredient1",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "list",
                    "kind": "query",
                    "name": "c",
                    "orig": "c",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "list",
                    "kind": "query",
                    "name": "g",
                    "orig": "g",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "list",
                    "kind": "query",
                    "name": "i",
                    "orig": "i",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/list.php",
              "segments": [
                {
                  "lit": "list.php"
                }
              ],
              "select": {
                "exist": [
                  "a",
                  "c",
                  "g",
                  "i"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.drinks`"
              },
              "parts": [
                "list.php"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/latest.php",
              "segments": [
                {
                  "lit": "latest.php"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.drinks`"
              },
              "parts": [
                "latest.php"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/popular.php",
              "segments": [
                {
                  "lit": "popular.php"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.drinks`"
              },
              "parts": [
                "popular.php"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lookup": {
      "fields": [
        {
          "name": "drinks",
          "type": "`$ARRAY`"
        },
        {
          "name": "ingredients",
          "type": "`$ARRAY`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "552",
                    "kind": "query",
                    "name": "iid",
                    "orig": "iid",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/lookup.php",
              "segments": [
                {
                  "lit": "lookup.php"
                }
              ],
              "select": {
                "exist": [
                  "i",
                  "iid"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "lookup.php"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "random": {
      "fields": [
        {
          "name": "drinks",
          "type": "`$ARRAY`"
        },
        {
          "name": "idDrink",
          "type": "`$STRING`"
        },
        {
          "name": "strAlcoholic",
          "type": "`$STRING`"
        },
        {
          "name": "strCategory",
          "type": "`$STRING`"
        },
        {
          "name": "strDrink",
          "type": "`$STRING`"
        },
        {
          "name": "strDrinkThumb",
          "type": "`$STRING`"
        },
        {
          "name": "strGlass",
          "type": "`$STRING`"
        },
        {
          "name": "strIngredient1",
          "type": "`$STRING`"
        },
        {
          "name": "strIngredient2",
          "type": "`$STRING`"
        },
        {
          "name": "strInstructions",
          "type": "`$STRING`"
        },
        {
          "name": "strMeasure1",
          "type": "`$STRING`"
        },
        {
          "name": "strMeasure2",
          "type": "`$STRING`"
        }
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
              "segments": [
                {
                  "lit": "random.php"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.drinks`"
              },
              "parts": [
                "random.php"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/randomselection.php",
              "segments": [
                {
                  "lit": "randomselection.php"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.drinks`"
              },
              "parts": [
                "randomselection.php"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "drinks",
          "type": "`$ARRAY`"
        },
        {
          "name": "ingredients",
          "type": "`$ARRAY`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "vodka",
                    "kind": "query",
                    "name": "i",
                    "orig": "i",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "margarita",
                    "kind": "query",
                    "name": "s",
                    "orig": "s",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search.php",
              "segments": [
                {
                  "lit": "search.php"
                }
              ],
              "select": {
                "exist": [
                  "f",
                  "i",
                  "s"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "search.php"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

