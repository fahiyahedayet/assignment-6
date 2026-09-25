"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Workout = {
    id: string;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    sets: number;
    reps: string;
    duration: number;
    calories: number;
    rating: number;
    description: string;
    instructions: string[];
};

type PlanContextType = {
    plan: Workout[];
    addToPlan: (workout: Workout) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [plan, setPlan] = useState<Workout[]>([]);

    useEffect(() => {
        const savedPlan = localStorage.getItem("fitlog-plan");

        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }, [plan]);

    const addToPlan = (workout: Workout) => {
        setPlan((currentPlan) => {
            const alreadyExists = currentPlan.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return currentPlan;
            }

            if (currentPlan.length >= 5) {
                return currentPlan;
            }

            return [...currentPlan, workout];
        });
    };

    return (
        <PlanContext.Provider value={{ plan, addToPlan }}>
            {children}
        </PlanContext.Provider>
    );
}

export function usePlan() {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }

    return context;
}