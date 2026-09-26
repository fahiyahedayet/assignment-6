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
    caloriesBurned: number;
    rating: number;
};

export default function Library() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.api-store.workers.dev/api/fitlog")
            .then((response) => response.json())
            .then((data) => { setWorkouts(data);
                setLoading(false);
            })
            .catch((error) => {console.error("Failed to fetch workouts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="library" className="bg-black px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">

                    <h2 className="text-4xl font-black uppercase text-white md:text-5xl">THE LIBRARY
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 md:text-base">Twelve lifts covering every major muscle group.
                    </p>
                </div>
                {loading && (
                    <p className="text-white/60"> Loading workouts...
                    </p>
                )}
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