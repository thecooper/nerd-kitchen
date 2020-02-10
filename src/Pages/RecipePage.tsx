import React, { useState } from "react";
import { recipe } from "../models/recipe";
import { RecipeView } from "../Elements/RecipeView";
import { createNewRecipe } from "../Functions/recipes";
import { RecipeEdit } from "../Elements/RecipeEdit";

interface RecipePageProps {}

const mockRecipes: recipe[] = [
  {
    name: "Meatball Sandwich",
    servings: 4,
    ingredients: [
      {
        quantity: 4,
        name: "hogie rolls",
        unit: ""
      },
      {
        quantity: 1,
        name: "ground beef",
        unit: "lb(s)"
      }
    ]
  }
];

export function RecipePage(props: RecipePageProps) {
  const [recipes, setRecipes] = useState<recipe[]>(mockRecipes);
  const [editingRecipe, setEditingRecipe] = useState<recipe | null>(null);

  const addNewRecipe = () => {
    const newRecipe = createNewRecipe();
    setRecipes([...recipes, newRecipe]);
    setEditingRecipe(newRecipe);
  };

  const handleUpdatedRecipe = (oldRecipe: recipe, newRecipe: recipe) => {
    setRecipes([
      ...recipes.map(r => {
        return r === oldRecipe ? newRecipe : r;
      })
    ]);
  };

  const handleEditRecipe = (recipe: recipe) => {
    setEditingRecipe(recipe);
  };

  const renderRecipeViewstate = (
    recipe: recipe,
    editingRecipe: recipe | null,
    index: number
  ) => {
    return editingRecipe === recipe ? (
      <RecipeEdit
        recipe={recipe}
        saveRecipe={newRecipe => {
          handleUpdatedRecipe(recipe, newRecipe);
        }}
        cancelEdit={() => setEditingRecipe(null)}
        key={index}
      />
    ) : (
      <RecipeView
        recipe={recipe}
        editRecipe={() => handleEditRecipe(recipe)}
        key={index}
      />
    );
  };

  return (
    <React.Fragment>
      <h1>Recipes</h1>
      <button type="button" onClick={addNewRecipe}>
        Add Recipe
      </button>
      {recipes.map((recipe, idx) =>
        renderRecipeViewstate(recipe, editingRecipe, idx)
      )}
    </React.Fragment>
  );
}
