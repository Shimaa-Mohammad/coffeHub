"use client";

import React, { useState, useMemo, useContext } from "react";
import Link from "next/link";
import { Drink } from "@/types/drinks";
import { HeartIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import { WishlistContext } from "@/context/WishlistContext";

export default function DrinkGrid({ drinks = [] }: { drinks?: Drink[] }) {
const [active, setActive] = useState<string>("All");
  const { toggleWishlist,wishlist } = useContext(WishlistContext)!;
    
   
  const handleToggle = (e: React.MouseEvent, drink: Drink): void => {
    e.preventDefault();
    e.stopPropagation();

    const isAdding=wishlist.find((item)=>item.idDrink===drink.idDrink)

    toggleWishlist(drink);
   if(!isAdding){

  toast.success("Added to Wishlist ☕", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
      background: "#fffefc",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
}
  };

  const categories = useMemo(() => {
  const uniqueCategories = new Set(
    drinks
      .map((d) => d.strCategory)
      .filter((cat): cat is string => Boolean(cat))
  );

  return ["All", ...uniqueCategories];
}, [drinks]);

  const filtered = useMemo(
    () =>
      active === "All"
        ? drinks
        : drinks.filter((d) => d.strCategory === active),
    [drinks, active]
  );

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
  const isActive = active === cat;

  return (
    <button
      key={cat}
      onClick={() => setActive(cat)}
      className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-150 ${
        isActive
          ? "bg-gray-900 text-white border-gray-900"
          : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
      }`}
    >
      {cat}
    </button>
  );
})}
      </div>

      {/* Count */}
      <p className="text-sm text-gray-400 mb-5">
        {filtered.length} drink{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((drink) => (
          <Link
            key={drink.idDrink}
            href={`/menue/${drink.idDrink}`}
            className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden hover:-translate-y-1 transition-transform duration-150"
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Heart icon */}
            <div className="absolute top-2 right-2 z-10">
              <HeartIcon
                onClick={(e) => handleToggle(e, drink)}
                className={`w-6 h-6 transition-all duration-300 cursor-pointer 
                ${
                  wishlist.find((item) => item.idDrink === drink.idDrink)
                    ? "text-red-500 fill-red-500 scale-110"
                    : "text-stone-600 hover:text-red-500"
                }`}
              />
            </div>


            {/* Content */}
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900 truncate">
                {drink.strDrink}
              </p>

              <span className="mt-1.5 inline-block text-[11px] bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full">
                {drink.strCategory}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400 text-sm">
          No drinks in this category.
        </div>
      )}
    </>
  );
}