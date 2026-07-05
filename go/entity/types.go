// Typed models for the CocktailRecipe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Filter is the typed data model for the filter entity.
type Filter struct {
	IdDrink *string `json:"id_drink,omitempty"`
	StrDrink *string `json:"str_drink,omitempty"`
	StrDrinkThumb *string `json:"str_drink_thumb,omitempty"`
}

// FilterListMatch is the typed request payload for Filter.ListTyped.
type FilterListMatch struct {
	IdDrink *string `json:"id_drink,omitempty"`
	StrDrink *string `json:"str_drink,omitempty"`
	StrDrinkThumb *string `json:"str_drink_thumb,omitempty"`
}

// List is the typed data model for the list entity.
type List struct {
	Drink *[]any `json:"drink,omitempty"`
	StrAlcoholic *string `json:"str_alcoholic,omitempty"`
	StrCategory *string `json:"str_category,omitempty"`
	StrGlass *string `json:"str_glass,omitempty"`
	StrIngredient1 *string `json:"str_ingredient1,omitempty"`
}

// ListListMatch is the typed request payload for List.ListTyped.
type ListListMatch struct {
	Drink *[]any `json:"drink,omitempty"`
	StrAlcoholic *string `json:"str_alcoholic,omitempty"`
	StrCategory *string `json:"str_category,omitempty"`
	StrGlass *string `json:"str_glass,omitempty"`
	StrIngredient1 *string `json:"str_ingredient1,omitempty"`
}

// Lookup is the typed data model for the lookup entity.
type Lookup struct {
	Drink *[]any `json:"drink,omitempty"`
	Ingredient *[]any `json:"ingredient,omitempty"`
}

// LookupListMatch is the typed request payload for Lookup.ListTyped.
type LookupListMatch struct {
	Drink *[]any `json:"drink,omitempty"`
	Ingredient *[]any `json:"ingredient,omitempty"`
}

// Random is the typed data model for the random entity.
type Random struct {
	Drink *[]any `json:"drink,omitempty"`
	IdDrink *string `json:"id_drink,omitempty"`
	StrAlcoholic *string `json:"str_alcoholic,omitempty"`
	StrCategory *string `json:"str_category,omitempty"`
	StrDrink *string `json:"str_drink,omitempty"`
	StrDrinkThumb *string `json:"str_drink_thumb,omitempty"`
	StrGlass *string `json:"str_glass,omitempty"`
	StrIngredient1 *string `json:"str_ingredient1,omitempty"`
	StrIngredient2 *string `json:"str_ingredient2,omitempty"`
	StrInstruction *string `json:"str_instruction,omitempty"`
	StrMeasure1 *string `json:"str_measure1,omitempty"`
	StrMeasure2 *string `json:"str_measure2,omitempty"`
}

// RandomListMatch is the typed request payload for Random.ListTyped.
type RandomListMatch struct {
	Drink *[]any `json:"drink,omitempty"`
	IdDrink *string `json:"id_drink,omitempty"`
	StrAlcoholic *string `json:"str_alcoholic,omitempty"`
	StrCategory *string `json:"str_category,omitempty"`
	StrDrink *string `json:"str_drink,omitempty"`
	StrDrinkThumb *string `json:"str_drink_thumb,omitempty"`
	StrGlass *string `json:"str_glass,omitempty"`
	StrIngredient1 *string `json:"str_ingredient1,omitempty"`
	StrIngredient2 *string `json:"str_ingredient2,omitempty"`
	StrInstruction *string `json:"str_instruction,omitempty"`
	StrMeasure1 *string `json:"str_measure1,omitempty"`
	StrMeasure2 *string `json:"str_measure2,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Drink *[]any `json:"drink,omitempty"`
	Ingredient *[]any `json:"ingredient,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Drink *[]any `json:"drink,omitempty"`
	Ingredient *[]any `json:"ingredient,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
