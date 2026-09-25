"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

type Workout = {
    id: string;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    duration: number;
    calories: number;
    rating: number;
};

export default function Library() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.abcz.workers.dev/api/fitlog")
            .then((response) => response.json())
            .then((data) => {
                setWorkouts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch workouts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="library" className="bg-black px-6 py-16">
            <div className="mx-auto max-w-7xl">

                {/* Library Heading */}
                <div className="mb-10">
                    <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#CCFF00]">
                        WORKOUTS
                    </p>

                    <h2 className="text-4xl font-black uppercase text-white md:text-5xl">
                        THE LIBRARY
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 md:text-base">
                        Explore workouts built to help you train with purpose and track
                        every set.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <p className="text-white/60">
                        Loading workouts...
                    </p>
                )}

                {/* Workout Cards */}
                {!loading && (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout) => (
                            <WorkoutCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}