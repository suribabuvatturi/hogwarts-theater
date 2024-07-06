export interface ICocktail {
  id: string;
  name: string;
  isAlcoholic: boolean;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  isFavorite?: boolean;
}
