"use client"
import { WishlistContext } from '@/context/WishlistContext';
import React, { useContext } from 'react'
import { Drink } from '@/types/drinks';
import DrinkGrid from '@/components/DrinkGrid';

function Wishlist() {
  const { wishlist } = useContext(WishlistContext)!;

return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Discover</p>
          <h1 className="text-3xl font-semibold text-gray-900">Our coffee menu</h1>
        </div>

        <DrinkGrid drinks={wishlist} />
      </div>
    </div>
  );
}

export default Wishlist