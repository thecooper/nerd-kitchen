import React, { useState } from "react";
import { ingredient } from "../models/ingredient";

interface Props {
  ingredient: ingredient;
  saveIngredient: (ingredient: ingredient) => void;
  cancelIngredient: () => void;
}

export function IngredientEdit(props: Props) {
  const { ingredient, saveIngredient, cancelIngredient } = props;

  const [quantity, setQuantity] = useState(ingredient.quantity);
  const [unit, setUnit] = useState(ingredient.unit);
  const [name, setName] = useState(ingredient.name);

  const handleSaveClick = () => {
    saveIngredient({
      ...ingredient,
      quantity,
      unit,
      name
    });
  };

  return (
    <React.Fragment>
      <span>
        <input
          type="text"
          value={quantity}
          onChange={(event: any) => setQuantity(event.target.value)}
          placeholder="Quantity"
        />
      </span>
      <span>
        <input
          type="text"
          value={unit}
          onChange={(event: any) => setUnit(event.target.value)}
          placeholder="Unit"
        />
      </span>
      <span>
        <input
          type="text"
          value={name}
          onChange={(event: any) => setName(event.target.value)}
          placeholder="Name"
        />
      </span>
      <span className="ingredient-edit-ctrl-buttons">
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
        <button type="button" onClick={cancelIngredient}>
          Cancel
        </button>
      </span>
    </React.Fragment>
  );
}
