import { link } from 'fs';
import React from 'react'
const footerLinks = {
  explore: ["Cocktails", "Non-alcoholic", "Shots", "Punches", "Hot drinks"],
  bySpirit: ["Vodka", "Rum", "Gin", "Whiskey", "Tequila"],
  company: ["About", "Blog", "Contact", "Privacy policy"],
};
export function Footer() {

 return (
    <footer className="w-full bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍹</span>
              <span className="text-xl font-semibold text-amber-900">CoffeeHub</span>
            </div>
            <p className="text-sm text-amber-700 leading-relaxed max-w-xs">
              Discover thousands of cocktail recipes, from classic mixes to modern creations. Shake, stir, and sip.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-4">
              {["𝕏", "in", "ig"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-full bg-amber-200 border border-amber-300 flex items-center justify-center text-sm text-amber-900 hover:bg-amber-300 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-medium text-amber-950 uppercase tracking-widest mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* By spirit */}
          <div>
            <p className="text-xs font-medium text-amber-950 uppercase tracking-widest mb-4">
              By spirit
            </p>
            <ul className="space-y-2">
              {footerLinks.bySpirit.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-medium text-amber-950 uppercase tracking-widest mb-4">
              Company
            </p>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-amber-300 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-amber-600">© 2026 Sipster. All rights reserved.</p>
          <p className="text-xs text-amber-600">Please drink responsibly. Must be 18+ to use this site.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer