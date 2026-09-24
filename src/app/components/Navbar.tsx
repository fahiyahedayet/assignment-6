"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div className="text-xl font-black tracking-tight text-white">
          FITLOG
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-bold text-[#CCFF00]"
          >
            WORKOUT
          </a>

          <a
            href="/my-plan"
            className="text-sm font-bold text-white transition hover:text-[#CCFF00]"
          >
            MY PLAN
          </a>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/my-plan"
            className="rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-black text-black"
          >
            PLAN 0
          </a>

          <a
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-black text-white"
          >
            SAVED 0
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="/"
              className="text-sm font-bold text-[#CCFF00]"
              onClick={() => setMenuOpen(false)}
            >
              WORKOUT
            </a>

            <a
              href="/my-plan"
              className="text-sm font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              MY PLAN
            </a>

            <div className="flex gap-3 pt-2">
              <a
                href="/my-plan"
                className="rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-black text-black"
              >
                PLAN 0
              </a>

              <a
                href="/my-plan"
                className="rounded-full border border-white/30 px-4 py-2 text-xs font-black text-white"
              >
                SAVED 0
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}