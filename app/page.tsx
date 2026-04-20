import React from 'react'
import Image from 'next/image'
import heroImage from '@/assets/home image.jpg';
import Link from 'next/link';
import HeroSection from '@/components/hero';

function HomePage() {
  const services = [
    {
      title: "Specialty brews",
      desc: "Hand-crafted espresso, cold brew, and seasonal drinks made by certified baristas.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    // 2

    {
      title: "Browse & discover",
      desc: "Search thousands of drink recipes by name, category, or spirit to find your next favourite.",
      iconBg: "bg-teal-50",
      iconColor: "text-teal-700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: "Easy ordering",
      desc: "Add to cart, track your order, and enjoy seamless checkout — all in a few taps.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
        </svg>
      ),
    },
    {
      title: "Save favourites",
      desc: "Bookmark your go-to drinks and build a personal collection you can revisit anytime.",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
    },
    {
      title: "Fast delivery",
      desc: "Order online and get your favourite coffee delivered fresh to your door within the hour.",
      iconBg: "bg-green-50",
      iconColor: "text-green-700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Loyalty rewards",
      desc: "Earn points with every order and unlock exclusive discounts for our most loyal members.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
  ];
  return (
    <>
<HeroSection/>
      <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-2">
              What we offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4 leading-snug">
              Everything you need<br className="hidden sm:block" /> for the perfect cup
            </h2>
            <p className="text-stone-500 text-base max-w-md leading-relaxed">
              From specialty brews to cozy spaces — CoffeeHub is built around your love for coffee.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-stone-100 rounded-2xl p-6 hover:-translate-y-1 hover:border-stone-200 transition-all duration-150"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>

                <h3 className="text-sm font-semibold text-stone-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

     <div className="bg-amber-950 px-8 py-12 mt-20 mx-auto w-[90%] max-w-[1400px] rounded-2xl mb-20">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    <article className="max-w-xl text-center md:text-left">
      <h1 className="text-amber-50 text-3xl font-bold">
        Ready to experience the best?
      </h1>

      <p className="text-base text-amber-200 mt-2">
        Visit our flagship store today or book one of our premium services online.
        We can't wait to serve you.
      </p>
    </article>

    <Link
      href="/menue"
      className="px-6 py-3 text-amber-50 hover:text-amber-900 bg-amber-700 hover:bg-amber-300 font-semibold rounded-md transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 hover:-translate-y-0.5"
    >
      Find Location
    </Link>

  </div>
</div>
    </>
  )
}

export default HomePage