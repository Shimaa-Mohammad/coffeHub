"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Sheet, SheetContent, SheetHeader,
  SheetTitle, SheetTrigger, SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function SidebarComponent({children,open,onOpenChange,}: SidebarProps) {
  const { items, removeItem, total, isOpen, setIsOpen,increaseQuantity,decreaseQuantity } = useCart();



  return (
    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>{children}</SheetTrigger>

      <SheetContent side="right" className="w-[90%] sm:max-w-md flex flex-col bg-stone-900">
        <SheetHeader className="border-b border-stone-700 pb-4">
          <SheetTitle className="text-xl font-semibold text-amber-100">
            Shopping Cart
            {items.length > 0 && (
              <span className="ml-2 text-sm bg-amber-700 text-white px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-2 py-16">
              <p className="text-amber-100 text-lg">Your basket is empty</p>
              <p className="text-sm text-stone-400">Add some delicious coffee to get started!</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.idDrink}
                className="flex items-center gap-3 bg-stone-800 rounded-xl p-3"
              >
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-amber-100 truncate">
                    {item.strDrink}
                  </p>
                  <p className="text-xs text-stone-400">{item.strCategory}</p>
                  <p className="text-sm text-amber-500 font-semibold mt-0.5">
                    ${(item.quantity * 5.99).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-300 bg-stone-700 px-2 py-1 rounded-md">
                  <Button onClick={()=>
                    increaseQuantity(item.idDrink)
                  } className="mr-3 cursor-pointer">
                    +
                    </Button> 
                    {item.quantity} 
                    <Button onClick={()=>
                    decreaseQuantity(item.idDrink)
                  } className="ml-3 cursor-pointer">
                    -
                    </Button> 
                  </span>
                  <button
                    onClick={() => removeItem(item.idDrink)}
                    className="text-stone-500 hover:text-red-400 transition-colors text-lg leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <SheetFooter className="border-t border-stone-700 pt-4">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center text-lg font-medium text-amber-100">
              <span>Total cost:</span>
              <span className="text-amber-400 font-bold">${total.toFixed(2)}</span>
            </div>
            <Button
              disabled={items.length === 0}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white h-12 rounded-xl transition-all disabled:opacity-40"
            >
              Checkout Now
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
