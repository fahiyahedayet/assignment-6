import Link from "next/link";
export default function Footer() {
    return (
        <footer className="border-t border-white/10  bg-black px-6 py-8 text-white" >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
                <Link href="/" className= "flex items-center gap-2"> <img src="/logo.png" alt="FitLog Logo"  className="h-6 w-auto" />
                    <span className="text-lg font-black tracking-wider text-white">
                          FIT<span className="text-white">LOG</span>
                    </span>
                </Link>
                <p className="text-xs text-white/50 text-center sm:text-right"> © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}