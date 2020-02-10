import React from "react";

import { ingredient } from "../models/ingredient";

interface Props {
  ingredient: ingredient;
}

export function IngredientView(props: Props) {
  const { ingredient } = props;

  const formattedIngredientMsg = () => {
    return ingredient.unit === ""
      ? `${ingredient.quantity} ${ingredient.name}`
      : `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
  };

  return (
    <React.Fragment>
      <span className="ingredient-view">{formattedIngredientMsg()}</span>
    </React.Fragment>
  );
}
