import { ingredient } from "../models/ingredient";

export function createNewIngredient(): ingredient {
  return {
    name: "<New Ingredient>",
    quantity: 0,
    unit: "units"
  };
}
