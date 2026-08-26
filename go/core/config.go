package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CocktailRecipe",
			"slug": "cocktail-recipe",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.thecocktaildb.com/api/json/v1/1",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"filter": map[string]any{},
				"list": map[string]any{},
				"lookup": map[string]any{},
				"random": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"filter": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "idDrink",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strDrink",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strDrinkThumb",
						"type": "`$STRING`",
					},
				},
				"name": "filter",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "Alcoholic",
											"kind": "query",
											"name": "a",
											"orig": "a",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "Ordinary_Drink",
											"kind": "query",
											"name": "c",
											"orig": "c",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "Cocktail_glass",
											"kind": "query",
											"name": "g",
											"orig": "g",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "Gin",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/filter.php",
								"parts": []any{
									"filter.php",
								},
								"select": map[string]any{
									"exist": []any{
										"a",
										"c",
										"g",
										"i",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drinks",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "strAlcoholic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strCategory",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strGlass",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strIngredient1",
						"type": "`$STRING`",
					},
				},
				"name": "list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "list",
											"kind": "query",
											"name": "a",
											"orig": "a",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "list",
											"kind": "query",
											"name": "c",
											"orig": "c",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "list",
											"kind": "query",
											"name": "g",
											"orig": "g",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "list",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/list.php",
								"parts": []any{
									"list.php",
								},
								"select": map[string]any{
									"exist": []any{
										"a",
										"c",
										"g",
										"i",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/latest.php",
								"parts": []any{
									"latest.php",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/popular.php",
								"parts": []any{
									"popular.php",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lookup": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drinks",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ingredients",
						"type": "`$ARRAY`",
					},
				},
				"name": "lookup",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "11007",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "552",
											"kind": "query",
											"name": "iid",
											"orig": "iid",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lookup.php",
								"parts": []any{
									"lookup.php",
								},
								"select": map[string]any{
									"exist": []any{
										"i",
										"iid",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"random": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drinks",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idDrink",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strAlcoholic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strCategory",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strDrink",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strDrinkThumb",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strGlass",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strIngredient1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strIngredient2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strInstructions",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strMeasure1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strMeasure2",
						"type": "`$STRING`",
					},
				},
				"name": "random",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random.php",
								"parts": []any{
									"random.php",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/randomselection.php",
								"parts": []any{
									"randomselection.php",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "drinks",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ingredients",
						"type": "`$ARRAY`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "a",
											"kind": "query",
											"name": "f",
											"orig": "f",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "vodka",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "margarita",
											"kind": "query",
											"name": "s",
											"orig": "s",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search.php",
								"parts": []any{
									"search.php",
								},
								"select": map[string]any{
									"exist": []any{
										"f",
										"i",
										"s",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
