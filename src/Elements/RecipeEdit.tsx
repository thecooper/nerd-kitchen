import React, { useState } from "react";
import { recipe } from "../models/recipe";
import { IngredientEdit } from "./IngredientEdit";
import { createNewIngredient } from "../Functions/ingredients";
import { ingredient } from "../models/ingredient";
import { IngredientView } from "./IngredientView";

interface RecipeEditProps {
  recipe: recipe;
  saveRecipe: (recipe: recipe) => void;
  cancelEdit: () => void;
}

export function RecipeEdit(props: RecipeEditProps) {
  const { recipe, saveRecipe, cancelEdit } = props;

  const [recipeName, setRecipeName] = useState(recipe.name);
  const [recipeServings, setRecipeServings] = useState(recipe.servings);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [editingIngredient, setEditingIngredient] = useState<ingredient | null>(
    null
  );

  const handleNameChange = (event: any) => {
    setRecipeName(event.target.value);
  };

  const handleServingsChange = (event: any) => {
    setRecipeServings(event.target.value);
  };

  const handleSubmitClick = () => {
    const updatedRecipe: recipe = {
      ...recipe,
      name: recipeName,
      servings: recipeServings
    };

    saveRecipe(updatedRecipe);
  };

  const addNewIngredient = () => {
    const newIngredient = createNewIngredient();
    setIngredients([...ingredients, newIngredient]);
    setEditingIngredient(newIngredient);
  };

  const handleCancelIngredient = () => {
    setEditingIngredient(null);
  };

  const handleSaveIngredient = (
    oldIngredient: ingredient,
    newIngredient: ingredient
  ) => {
    setIngredients([
      ...ingredients.map(i => {
        return i === oldIngredient ? newIngredient : i;
      })
    ]);
    setEditingIngredient(null);
  };

  const editIngredient = (ingredient: ingredient) => {
    if (editingIngredient === null) {
      setEditingIngredient(ingredient);
    } else {
      setEditingIngredient(null);
    }
  };

  const renderIngredientViewstate = (
    ingredient: ingredient,
    editingIngredient: ingredient | null
  ) => {
    return ingredient === editingIngredient ? (
      <IngredientEdit
        ingredient={ingredient}
        cancelIngredient={handleCancelIngredient}
        saveIngredient={newIngredient =>
          handleSaveIngredient(ingredient, newIngredient)
        }
      />
    ) : (
      <div onClick={() => editIngredient(ingredient)}>
        <IngredientView ingredient={ingredient} />
      </div>
    );
  };

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={recipeName}
          onChange={handleNameChange}
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="text"
          value={recipeServings}
          onChange={handleServingsChange}
          placeholder="Servings"
        />
      </div>
      <div>
        <button type="button" onClick={addNewIngredient}>
          Add Ingredient
        </button>
      </div>
      <div>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>
              {renderIngredientViewstate(ingredient, editingIngredient)}
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-edit-ctrl-buttons">
        <button type="button" onClick={handleSubmitClick}>
          Save
        </button>
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
}
