package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CocktailRecipe",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "idDrink",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "strDrink",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "strDrinkThumb",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "filter",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "Alcoholic",
											"kind": "query",
											"name": "a",
											"orig": "a",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "Ordinary_Drink",
											"kind": "query",
											"name": "c",
											"orig": "c",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "Cocktail_glass",
											"kind": "query",
											"name": "g",
											"orig": "g",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "Gin",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "drinks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "strAlcoholic",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "strCategory",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "strGlass",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "strIngredient1",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "list",
											"kind": "query",
											"name": "a",
											"orig": "a",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "list",
											"kind": "query",
											"name": "c",
											"orig": "c",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "list",
											"kind": "query",
											"name": "g",
											"orig": "g",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "list",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"reqd": false,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
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
								"index$": 2,
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
						"active": true,
						"name": "drinks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "ingredients",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "lookup",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "11007",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "552",
											"kind": "query",
											"name": "iid",
											"orig": "iid",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "drinks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "idDrink",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "strAlcoholic",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "strCategory",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "strDrink",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "strDrinkThumb",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "strGlass",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "strIngredient1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "strIngredient2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "strInstructions",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "strMeasure1",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "strMeasure2",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
				},
				"name": "random",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
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
						"active": true,
						"name": "drinks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "ingredients",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "a",
											"kind": "query",
											"name": "f",
											"orig": "f",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "vodka",
											"kind": "query",
											"name": "i",
											"orig": "i",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "margarita",
											"kind": "query",
											"name": "s",
											"orig": "s",
											"reqd": false,
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
								"index$": 0,
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
