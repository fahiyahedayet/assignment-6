"use client";
import { usePlan } from "../context/PlanContext";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

         <Link href="/" className="flex items-center gap-2"><img  src="/logo.png" alt="FitLog Logo" className="h-6 w-auto"/>
            <span className="font-[var(--font-oswald)] text-lg font-black tracking-wider text-white"> FIT<span className="text-white">LOG</span>
            </span>
         </Link>


        <div className="hidden items-center gap-2 md:flex">
          <a href="/" className={`rounded-lg px-4 py-2 text-sm font-bold transition ${pathname === "/" ? "bg-[#222630] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"}`}>WORKOUT</a>

          <a href="/my-plan" className={`rounded-lg px-4 py-2 text-sm font-bold transition ${pathname === "/my-plan" ? "bg-[#222630] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"}`}> MY PLAN</a>
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <a href="/my-plan" className="flex items-center gap-2 text-xs font-black text-white transition hover:text-[#CCFF00]">
            <span>Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-black">{plan.length} </span>
          </a>

          <a href="/my-plan" className="flex items-center gap-2 text-xs font-black text-white transition hover:text-[#CCFF00]">
            <span>Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white">{saved.length}</span>
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="/"className={`rounded-lg px-4 py-2 text-sm font-bold transition ${pathname === "/" ? "bg-[#222630] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]" }`}onClick={() => setMenuOpen(false)}>WORKOUT </a>
            

            <a href="/my-plan" className={`rounded-lg px-4 py-2 text-sm font-bold transition ${pathname === "/my-plan" ? "bg-[#222630] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"}`}onClick={() => setMenuOpen(false)}>   MY PLAN </a>
            <div className="flex items-center gap-6 pt-2">
              <a href="/my-plan" className="flex items-center gap-2 text-xs font-black text-white" onClick={() => setMenuOpen(false)}>
                <span>Plan</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-black">{plan.length}</span>
              </a>
              <a href="/my-plan" className="flex items-center gap-2 text-xs font-black text-white" onClick={() => setMenuOpen(false)}>
                <span>Saved</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white">{saved.length}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}