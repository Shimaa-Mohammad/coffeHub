"use client"

import { useState } from "react"
import { Drink } from "@/types/drinks"
import DrinkGrid from "./DrinkGrid"

interface Props {
  drinks: Drink[]
}

export default function CoffeeGameClient({ drinks }: Props) {
  const [current, setCurrent] = useState<Drink | null>(null)
  const [spinning, setSpinning] = useState(false)
  const [revealed, setRevealed] = useState(false)

  function roll() {
    if (spinning) return
    setSpinning(true)
    setRevealed(false)
    setCurrent(null)

    setTimeout(() => {
      const result = drinks[Math.floor(Math.random() * drinks.length)]
      setCurrent(result)
      setSpinning(false)
      setRevealed(true)
    }, 1100)
  }

  return (
    <div className="  flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

      <div className="w-full max-w-screen-xl flex flex-col items-center">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs text-amber-600 uppercase tracking-widest mb-1">
            spin the wheel
          </p>

          <h1 className="text-3xl font-semibold text-stone-800">
            What's your brew?
          </h1>
        </div>


        {/* Game Area */}
        <div className="mb-5 flex items-center justify-center min-h-[320px]">

          {/* Loading */}
          {spinning && (
            <div className="w-[320px] h-[360px] border border-amber-100 rounded-2xl bg-white flex items-center justify-center shadow-sm">

              <div className="w-10 h-10 rounded-full border-4 border-amber-200 border-t-amber-700 animate-spin" />

            </div>
          )}


          {/* Result */}
          {!spinning && revealed && current && (
            <div className="animate-pop">

              <DrinkGrid drinks={[current]} />

            </div>
          )}


          {/* Placeholder */}
          {!spinning && !revealed && (
<div className="w-[320px] h-[360px] border border-dashed border-amber-200 rounded-3xl bg-white flex flex-col items-center justify-center gap-4 animate-float shadow-sm">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b45309"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M18 8h1a4 4 0 010 8h-1"/>
                <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
                <line x1="6" y1="1" x2="6" y2="4"/>
                <line x1="10" y1="1" x2="10" y2="4"/>
                <line x1="14" y1="1" x2="14" y2="4"/>
              </svg>

              <p className="text-sm text-amber-700">
                Tap to reveal your drink
              </p>

            </div>
          )}

        </div>


        {/* Button */}
        <button
          onClick={roll}
          disabled={spinning}
          className="animate-pop px-10 py-3 rounded-full bg-amber-700 text-white text-sm font-medium tracking-wide hover:bg-amber-800 active:scale-95 transition-all disabled:opacity-50 shadow-sm"
        >
          {spinning ? "Brewing..." : revealed ? "Roll again" : "Roll the dice"}
        </button>

      </div>
    </div>
  )
}