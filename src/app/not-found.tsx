export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
            <div className="text-center">
                <p className="text-sm font-bold tracking-[0.3em] text-[#CCFF00]"> FITLOG
                </p>
                <h1 className="mt-4 text-7xl  font-black uppercase md:text-9xl"> 404
                </h1>
                <h2 className="mt-4 text-2xl font-black uppercase md:text-3xl">PAGE NOT FOUND
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-white/50"> The workout or page you're looking for doesn't exist.
                </p>
                <a href="/" className="mt-8 inline-flex rounded-full bg-[#CCFF00] px-7 py-3 text-sm font-black text-black transition hover:brightness-95">
                    BACK TO WORKOUTS
                </a>
            </div>
        </main>
        
    );
}