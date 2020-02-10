import { recipe } from "./recipe";

export interface shoppingList {
  weekStart: Date;
  weekEnd: Date;
  recipes: recipe[];
}
