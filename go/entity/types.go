// Typed models for the CocktailRecipe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cocktail-recipe-sdk/go/core"
)

// Filter is the typed data model for the filter entity.
type Filter struct {
	IdDrink *string `json:"idDrink,omitempty"`
	StrDrink *string `json:"strDrink,omitempty"`
	StrDrinkThumb *string `json:"strDrinkThumb,omitempty"`
}

// FilterListMatch is the typed request payload for Filter.ListTyped.
type FilterListMatch struct {
	IdDrink *string `json:"idDrink,omitempty"`
	StrDrink *string `json:"strDrink,omitempty"`
	StrDrinkThumb *string `json:"strDrinkThumb,omitempty"`
}

// List is the typed data model for the list entity.
type List struct {
	Drinks *[]any `json:"drinks,omitempty"`
	StrAlcoholic *string `json:"strAlcoholic,omitempty"`
	StrCategory *string `json:"strCategory,omitempty"`
	StrGlass *string `json:"strGlass,omitempty"`
	StrIngredient1 *string `json:"strIngredient1,omitempty"`
}

// ListListMatch is the typed request payload for List.ListTyped.
type ListListMatch struct {
	Drinks *[]any `json:"drinks,omitempty"`
	StrAlcoholic *string `json:"strAlcoholic,omitempty"`
	StrCategory *string `json:"strCategory,omitempty"`
	StrGlass *string `json:"strGlass,omitempty"`
	StrIngredient1 *string `json:"strIngredient1,omitempty"`
}

// Lookup is the typed data model for the lookup entity.
type Lookup struct {
	Drinks *[]any `json:"drinks,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
}

// LookupListMatch is the typed request payload for Lookup.ListTyped.
type LookupListMatch struct {
	Drinks *[]any `json:"drinks,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
}

// Random is the typed data model for the random entity.
type Random struct {
	Drinks *[]any `json:"drinks,omitempty"`
	IdDrink *string `json:"idDrink,omitempty"`
	StrAlcoholic *string `json:"strAlcoholic,omitempty"`
	StrCategory *string `json:"strCategory,omitempty"`
	StrDrink *string `json:"strDrink,omitempty"`
	StrDrinkThumb *string `json:"strDrinkThumb,omitempty"`
	StrGlass *string `json:"strGlass,omitempty"`
	StrIngredient1 *string `json:"strIngredient1,omitempty"`
	StrIngredient2 *string `json:"strIngredient2,omitempty"`
	StrInstructions *string `json:"strInstructions,omitempty"`
	StrMeasure1 *string `json:"strMeasure1,omitempty"`
	StrMeasure2 *string `json:"strMeasure2,omitempty"`
}

// RandomListMatch is the typed request payload for Random.ListTyped.
type RandomListMatch struct {
	Drinks *[]any `json:"drinks,omitempty"`
	IdDrink *string `json:"idDrink,omitempty"`
	StrAlcoholic *string `json:"strAlcoholic,omitempty"`
	StrCategory *string `json:"strCategory,omitempty"`
	StrDrink *string `json:"strDrink,omitempty"`
	StrDrinkThumb *string `json:"strDrinkThumb,omitempty"`
	StrGlass *string `json:"strGlass,omitempty"`
	StrIngredient1 *string `json:"strIngredient1,omitempty"`
	StrIngredient2 *string `json:"strIngredient2,omitempty"`
	StrInstructions *string `json:"strInstructions,omitempty"`
	StrMeasure1 *string `json:"strMeasure1,omitempty"`
	StrMeasure2 *string `json:"strMeasure2,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Drinks *[]any `json:"drinks,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Drinks *[]any `json:"drinks,omitempty"`
	Ingredients *[]any `json:"ingredients,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
