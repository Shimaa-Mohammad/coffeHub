"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Drink } from "@/types/drinks";
interface CartItem extends Drink {
  quantity: number;
}


interface CartContextType {
  items: CartItem[];
  addItem: (drink: Drink) => void;
  removeItem: (id: string) => void;
  increaseQuantity:(id:string)=>void;
  decreaseQuantity:(id:string)=>void;
  total: number;
  isOpen:boolean;
  setIsOpen:(open:boolean) => void;

}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  useEffect(()=>{
    const storedItems=localStorage.getItem("Cart")
    if(storedItems){
    setItems(JSON.parse(storedItems));
    }
  },[])
  useEffect(()=>{
   localStorage.setItem("Cart",JSON.stringify(items))
  },[items])

  const addItem = (drink: Drink) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.idDrink === drink.idDrink);
      if (existing) {
        return prev.map((i) =>
          i.idDrink === drink.idDrink ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...drink, quantity: 1 }];
    });
 
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.idDrink !== id));

  };

  const total = items.reduce((sum, i) => sum + i.quantity * 5.99, 0);

  const increaseQuantity = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.idDrink === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.idDrink === id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i
      ).filter((i) =>
        i.idDrink === id ? i.quantity > 0 : true

      )
    
    );
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total, isOpen: isOpenSidebar, setIsOpen: setIsOpenSidebar ,increaseQuantity,decreaseQuantity}}>

      {children}

    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};