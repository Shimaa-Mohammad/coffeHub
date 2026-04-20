"use client";

import { createContext, useState, ReactNode, useEffect, useContext } from "react";
import { Drink } from "@/types/drinks";

interface WishlistType {
  wishlist: Drink[];
  toggleWishlist: (drink: Drink) => void;
}

export const WishlistContext =createContext<WishlistType | null>(null);

export function WishlistProvider({children,}: {children: ReactNode;}) {
  const [wishlist, setWishlist] = useState<Drink[]>([]);

  const toggleWishlist = (drink: Drink) => {
    setWishlist((prev) => {
      const exists = prev.find(
        (item) => item.idDrink === drink.idDrink
      );

      if (exists) {
        return prev.filter(
          (item) => item.idDrink !== drink.idDrink
        );
      }

      return [...prev, drink];
    });
  };

  useEffect(()=>{
   const wishListStore=localStorage.getItem("WishList")
   if(wishListStore){
    setWishlist(JSON.parse(wishListStore))
   }
  },[])
  // store 
  useEffect(()=>{
  localStorage.setItem("WishList",JSON.stringify(wishlist))
  },[wishlist])

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist=()=>{
  const context=useContext(WishlistContext);
  if(!context){
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}