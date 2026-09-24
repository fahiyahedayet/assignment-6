export default function Hero() {
    return (
        <section className="bg-black py-4 md:py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid min-h-[75vh] items-center gap-8 rounded-3xl bg-[#222630] px-8 py-12 md:grid-cols-2 md:px-16 md:py-16 shadow-2xl">

                    
                    <div>
                        <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#CCFF00] md:text-sm">
                            WORKOUT LIBRARY
                        </p>

                        <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] leading-[1]">
                            Train With Intent. Log Every Set.
                        </h1>

                        <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today's plan and watch the week's work add up.
                        </p>

                        <a href="#library" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3.5 text-sm font-black text-black transition-transform hover:scale-105"
                        >BROWSE WORKOUTS
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img src="/banner.png" alt="Workout" className="max-h-[340px] w-full object-contain md:max-h-[420px]"/>
                    </div>

                </div>
            </div>
        </section>
    );
}