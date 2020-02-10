import { recipe } from "../models/recipe";

export function createNewRecipe(): recipe {
  return {
    name: "New Recipe",
    servings: 0,
    ingredients: [],
    images: {
      thumbnail: "",
      fullSize: ""
    }
  };
}
