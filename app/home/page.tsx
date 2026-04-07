import React from 'react'
import Image from 'next/image'
import heroImage from '@/assets/home image.jpg';
import Link from 'next/link';

function HomePage() {
 return (
  <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 min-h-[90vh] px-8 md:px-16 py-12 overflow-hidden bg-cyan-50">
    
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[100px]" />
    </div>

    {/* Text + Buttons */}
    <div className="relative z-10 flex flex-col items-start gap-6 max-w-xl">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-stone-900">
        Discover the{" "}
        <span className="text-teal-800">best drinks</span>{" "}
        near you ☕
      </h1>
      <p className="text-zinc-400 text-lg leading-relaxed">
        Explore top-rated bars, cafés, and cocktail lounges around your area. 
      </p>

      <div className="flex items-center gap-4 mt-2">
        <Link href="/menue" className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-teal-950 font-semibold rounded-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 hover:-translate-y-0.5">
          Browse Menu Now
        </Link>
        <button className="px-6 py-3 border border-teal-700 hover:border-teal-400/50 text-teal-300 hover:text-teal-400 font-semibold rounded-sm transition-all duration-200 hover:-translate-y-0.5">
          Learn More
        </button>
      </div>
    </div>

    {/* Image */}
    <div className="relative z-10 flex-shrink-0 w-full md:w-[45%] flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-2xl scale-95" />
        <Image
          src={heroImage}
          alt="drink"
          className="relative rounded-3xl object-cover w-full max-h-[520px] shadow-2xl shadow-black/40"
        />
      </div>
    </div>

  </div>
)
}

export default HomePage