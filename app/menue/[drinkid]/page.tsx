import { Drink, DrinksResponse } from "@/types/drinks";
import Link from 'next/link';
import SidebarComponent from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/components/AddToCartButton";

type Params = Promise<
  { drinkid: string }
>;

export const revalidate = 60;

export default async function DrinkDetailPage({ params }: { params: Params }) {

  const { drinkid } = await params;

  let drink: Drink | null = null;

  try {
    const res = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkid}`
    );

    if (!res.ok) throw new Error("Failed to fetch drink");

    const data: DrinksResponse = await res.json();

    drink = data.drinks ? data.drinks[0] : null;

  } catch (error) {
    console.error(error);
  }

  if (!drink) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold">Drink not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <Link href="/menue" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          ← Back to drinks
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col md:flex-row">

          <div className="md:w-1/2 relative">
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="w-full h-72 md:h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                {drink.strCategory}
              </span>
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${drink.strAlcoholic === "Alcoholic"
                  ? "bg-green-50 border-green-300 text-green-700"
                  : "bg-amber-50 border-amber-300 text-amber-700"
                }`}>
                {drink.strAlcoholic}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 md:w-1/2 flex flex-col justify-center">

            <div className="mb-6">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                {drink.strDrink}
              </h1>
              <p className="text-sm text-gray-400">
                {drink.strGlass} · {drink.strIBA ?? drink.strCategory}
              </p>
            </div>

            {/* Meta cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 mb-0.5">Category</p>
                <p className="text-sm font-medium text-gray-800">{drink.strCategory}</p>
              </div>
              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 mb-0.5">Glass</p>
                <p className="text-sm font-medium text-gray-800">{drink.strGlass}</p>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="mb-8">
              <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-4">
                Ingredients
              </h2>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-4">
                Instructions
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {drink.strInstructions}
              </p>
            </div>

            {/*  */}
            <div className="mt-8">
              
                <span />
              <AddToCartButton drink={drink} />
             
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}