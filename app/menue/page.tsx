import Link from 'next/link'; // 1. استيراد Link
import { Drink, DrinksResponse } from "@/.next/types/drinks";

export const revalidate = 60;

export default async function MenuPage() {
  let drinks: Drink[] = [];
  
  try {
    const res = await fetch(
      "https://thecocktaildb.com/api/json/v1/1/search.php?s=coffee"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: DrinksResponse = await res.json();
    drinks = data.drinks || []; // التأكد من وجود بيانات لتجنب الـ Error لو الـ API رجع فاضي
 console.log(drinks)
  } catch (error: any) {
    console.error(error);
  }

 return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Coffee Menu</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {drinks.map((drink) => (
            <div key={drink.idDrink} className="group relative">
              {/* الصورة */}
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-auto lg:h-80">
                <img
                  alt={drink.strDrink}
                  src={drink.strDrinkThumb}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* التعديل هنا لضمان مطابقة اسم المجلد الجديد [drinkid] */}
                    <Link href={`/menue/${drink.idDrink}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {drink.strDrink}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{drink.strCategory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}