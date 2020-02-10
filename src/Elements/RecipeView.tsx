import React from "react";
import { recipe } from "../models/recipe";

interface RecipeViewProps {
  recipe: recipe;
  editRecipe: () => void;
}

export function RecipeView(props: RecipeViewProps) {
  const { recipe, editRecipe } = props;

  return (
    <div onClick={editRecipe}>
      <div>Name: {recipe.name}</div>
      <div>Servings: {recipe.servings}</div>
      <div>Ingredients: {recipe.ingredients.length}</div>
    </div>
  );
}
