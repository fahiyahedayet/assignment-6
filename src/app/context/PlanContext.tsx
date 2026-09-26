"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Workout = {
    id: string;
    name: string;
    completed?: boolean;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    sets: number;
    reps: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
    description: string;
    instructions: string[];
};

type PlanContextType = {
    plan: Workout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    removeFromPlan: (id: string) => void;
    markAsDone: (id: string) => void;
    addToSaved: (workout: Workout) => void;
    removeFromSaved: (id: string) => void;
};


const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [saved, setSaved] = useState<Workout[]>([]);

useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
        setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
        setSaved(JSON.parse(savedWorkouts));
    }

    setLoaded(true);
}, []);

   useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
}, [plan, saved, loaded]);

    const addToPlan = (workout: Workout) => {
        setPlan((currentPlan) => {
            const alreadyExists = currentPlan.some((item) => item.id === workout.id);

            if (alreadyExists) {
                return currentPlan;
            }

            if (currentPlan.length >= 5) {
                return currentPlan;
            }

            return [...currentPlan, workout];
        });
    };

    const removeFromPlan = (id: string) => {
        setPlan((currentPlan) => currentPlan.filter((workout) => workout.id !== id));
    };

    const markAsDone = (id: string) => {
        setPlan((currentPlan) => currentPlan.map((workout) => workout.id === id ? { ...workout, completed: true } : workout));
    };

    const addToSaved = (workout: Workout) => {
    setSaved((currentSaved) => {
        const alreadySaved = currentSaved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            return currentSaved;
        }

        return [...currentSaved, workout];
    });
};

const removeFromSaved = (id: string) => {
    setSaved((currentSaved) =>
        currentSaved.filter((workout) => workout.id !== id)
    );
};

    return (
        <PlanContext.Provider value={{ plan, saved, addToPlan, removeFromPlan, markAsDone , addToSaved,removeFromSaved}}>{children} </PlanContext.Provider>
    );
}

export function usePlan() {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }

    return context;
}