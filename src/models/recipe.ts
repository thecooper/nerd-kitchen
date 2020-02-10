import { ingredient } from "./ingredient";

export interface recipe {
  name: string;
  ingredients: ingredient[]; // TODO make typing better
  servings: number;
  images?: {
    thumbnail: string;
    fullSize: string;
  };
}
