export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;

  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;

  [key: string]: any;
}

export interface DrinksResponse {
  drinks: Drink[];
}