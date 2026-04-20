"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import SidebarComponent from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import Wishlist from '@/app/wishList/page';
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Menu', href: '/menue', current: true },
  { name: 'About', href: '#', current: false },
  { name: `Wishlist`, href: '/wishList', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { items } = useCart()
  const { wishlist } = useWishlist()

  return (

    <Disclosure as="nav" className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-2 text-stone-500 hover:bg-stone-100 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo & Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-200">
                <span className="font-bold">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900 hidden lg:block">
                Coffee<span className="text-amber-700">Hub</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-amber-700 font-semibold border-b-2 border-amber-700'
                        : 'text-stone-500 hover:text-amber-700 transition-colors duration-200',
                      'px-1 py-1 text-sm font-medium relative'
                    )}
                  >
                    {item.name}

                    {item.name === "Wishlist" && wishlist.length > 0 && (
                      <span className="absolute -top-3 left-2/2 -translate-x-1/2 bg-amber-700 text-white text-xs rounded-full px-2 py-0.5">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>

                ))}
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">

            {/* Cart Icon */}


            <SidebarComponent>
              <div className="relative">
                <ShoppingBagIcon className="size-10 p-2 text-stone-400 hover:text-amber-700 transition-colors" />

                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full px-2 py-0.5">
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </div>
            </SidebarComponent>

           

            {/* Order Now Button (Desktop Only) */}
            <Link href="/menue"
            className="hidden md:block ml-2 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-800 shadow-md transition-all active:scale-95">

              Order Now
            </Link>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden bg-white/90 backdrop-blur-md">
        <div className="space-y-1 px-4 pt-2 pb-6 border-t border-stone-50">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-amber-50 text-amber-700' : 'text-stone-600 hover:bg-stone-50 hover:text-amber-700',
                'block rounded-xl px-4 py-3 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <Button className="w-full mt-4 rounded-xl bg-amber-700 py-3 text-white font-bold">
            Order Now
          </Button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}