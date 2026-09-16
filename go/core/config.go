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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
								"segments": []any{
									map[string]any{
										"lit": "filter.php",
									},
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
								"parts": []any{
									"filter.php",
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
								"segments": []any{
									map[string]any{
										"lit": "list.php",
									},
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
								"parts": []any{
									"list.php",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/latest.php",
								"segments": []any{
									map[string]any{
										"lit": "latest.php",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
								"parts": []any{
									"latest.php",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/popular.php",
								"segments": []any{
									map[string]any{
										"lit": "popular.php",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
								"parts": []any{
									"popular.php",
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
								"segments": []any{
									map[string]any{
										"lit": "lookup.php",
									},
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
								"parts": []any{
									"lookup.php",
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
								"segments": []any{
									map[string]any{
										"lit": "random.php",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
								"parts": []any{
									"random.php",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/randomselection.php",
								"segments": []any{
									map[string]any{
										"lit": "randomselection.php",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.drinks`",
								},
								"parts": []any{
									"randomselection.php",
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
								"segments": []any{
									map[string]any{
										"lit": "search.php",
									},
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
								"parts": []any{
									"search.php",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
