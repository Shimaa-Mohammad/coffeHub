"use client";

import { useCart } from "@/context/CartContext";
import { Drink, DrinksResponse } from "@/types/drinks";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddToCartButton({ drink }: { drink: Drink }) {
  const { addItem,setIsOpen } = useCart();

  return (
    <>
    <Button
      onClick={() => {
        addItem(drink);
        setIsOpen(true);
      }}
      size="lg"
      className="w-min md:w-auto bg-amber-800 hover:bg-amber-400 text-white rounded-full px-12 py-6 text-lg shadow-lg transition-all duration-500 active:scale-95"
    >
      Buy
    </Button>
     </>
  );
}