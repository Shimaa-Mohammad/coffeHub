import { Drink, DrinksResponse } from "@/types/drinks";

export default async function getDrinks(): Promise<Drink[]> {
  try {
    const res = await fetch(
      "https://thecocktaildb.com/api/json/v1/1/search.php?s=coffee"
    );

    if (!res.ok) throw new Error("Failed to fetch");

    const data: DrinksResponse = await res.json();

    return data?.drinks ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}