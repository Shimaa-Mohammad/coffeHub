import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Menu', href: '/menue', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Locations', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
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
                      'px-1 py-1 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
            
            {/* Cart Icon */}
            <button className="p-2 text-stone-400 hover:text-amber-700 transition-colors">
              <ShoppingBagIcon className="size-6" />
            </button>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-1">
              <MenuButton className="flex rounded-full bg-stone-100 ring-2 ring-transparent hover:ring-amber-200 transition-all p-0.5">
                <img
                  alt="User Profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full object-cover"
                />
              </MenuButton>

              <MenuItems transition className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-stone-700 rounded-lg hover:bg-stone-50">Your Profile</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-stone-700 rounded-lg hover:bg-stone-50">Settings</a>
                </MenuItem>
                <hr className="my-1 border-stone-100" />
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50">Sign out</a>
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Order Now Button (Desktop Only) */}
            <button className="hidden md:block ml-2 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-800 shadow-md transition-all active:scale-95">
              Order Now
            </button>
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
          <button className="w-full mt-4 rounded-xl bg-amber-700 py-3 text-white font-bold">
            Order Now
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}