"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { usePlan } from "../context/PlanContext";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function MyPlan() {
    const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } = usePlan();
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const totalMinutes = plan.reduce(
        (total, workout) => total + Number(workout.duration || 0), 0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + Number(workout.caloriesBurned || 0), 0
    );

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black px-6 py-12 text-white">
                <div className="mx-auto max-w-7xl">

                    <div>
                        <p className="text-xs font-bold tracking-[0.25em] text-[#CCFF00]">YOUR TRAINING</p>
                        <h1 className="mt-2 text-4xl font-black uppercase md:text-5xl">MY PLAN</h1>
                        <p className="mt-3 text-sm text-white/60 md:text-base">Build today's workout and keep your training focused.</p>
                    </div>

                    {/* Metrics Summary */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-[#222630] p-6">
                            <p className="text-xs font-bold uppercase text-white/50">Exercises</p>
                            <p className="mt-2 text-3xl font-black">{plan.length}</p>
                        </div>
                        <div className="rounded-2xl bg-[#222630] p-6">
                            <p className="text-xs font-bold uppercase text-white/50">Minutes</p>
                            <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
                        </div>
                        <div className="rounded-2xl bg-[#222630] p-6">
                            <p className="text-xs font-bold uppercase text-white/50">Calories</p>
                            <p className="mt-2 text-3xl font-black">{totalCalories}</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-10 flex items-center gap-3">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded-full px-5 py-2.5 text-sm font-bold ${activeTab === "plan" ? "bg-[#222630] text-[#CCFF00]" : "text-white/50"}`}
                        >
                            Today's Plan ({plan.length})
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-full px-5 py-2.5 text-sm font-bold ${activeTab === "saved" ? "bg-[#222630] text-[#CCFF00]" : "text-white/50"}`}
                        >
                            Saved ({saved.length})
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="mt-6">
                        {activeTab === "plan" ? (
                            plan.length === 0 ? (
                                <div className="rounded-2xl border border-white/10 bg-[#171920] px-6 py-16 text-center">
                                    <h2 className="text-2xl font-black uppercase">Your plan is empty</h2>
                                    <p className="mt-3 text-sm text-white/50">Add a workout from the library to start today's plan.</p>
                                    <Link href="/" className="mt-6 inline-flex rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-black text-black">
                                        BROWSE WORKOUTS
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {plan.map((workout) => (
                                        <div key={workout.id} className="rounded-2xl bg-[#222630] p-4">
                                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                                <img src={workout.image} alt={workout.title || workout.name} className="h-24 w-full rounded-xl object-cover sm:h-24 sm:w-32" />

                                                <div className="min-w-0 flex-1">
                                                    <h2 className="text-lg font-black uppercase">{workout.title || workout.name}</h2>
                                                    <p className="mt-1 text-sm text-white/50">{workout.equipment}</p>
                                                    <p className="mt-2 text-xs font-bold text-white/50">
                                                        {Number(workout.duration || 0)} MIN · {Number(workout.calories || workout.caloriesBurned || 0)} CAL · ★ {workout.rating}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-2">
                                                    <Link href={`/workouts/${workout.id}`} className="rounded-lg border border-white/15 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/5">
                                                        View Details
                                                    </Link>

                                                    <button onClick={() => markAsDone(workout.id)} className="rounded-lg bg-[#CCFF00] px-4 py-2 text-xs font-black text-black transition hover:brightness-95">
                                                        {workout.completed ? "DONE" : "Mark as Done"}
                                                    </button>

                                                    <button onClick={() => removeFromPlan(workout.id)} className="rounded-lg p-2 text-white/50 transition hover:bg-white/10 hover:text-white" aria-label="Remove">
                                                        <HiOutlineX size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ) : (
                            /* Saved Tab Content */
                            saved.length === 0 ? (
                                <div className="rounded-2xl border border-white/10 bg-[#171920] px-6 py-16 text-center">
                                    <h2 className="text-2xl font-black uppercase">No saved workouts</h2>
                                    <p className="mt-3 text-sm text-white/50">Save workouts for later from their detail pages.</p>
                                    <Link href="/" className="mt-6 inline-flex rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-black text-black">
                                        BROWSE WORKOUTS
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {saved.map((workout) => (
                                        <div key={workout.id} className="rounded-2xl bg-[#222630] p-4">
                                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                                <img src={workout.image} alt={workout.title || workout.name} className="h-24 w-full rounded-xl object-cover sm:h-24 sm:w-32" />

                                                <div className="min-w-0 flex-1">
                                                    <h2 className="text-lg font-black uppercase">{workout.title || workout.name}</h2>
                                                    <p className="mt-1 text-sm text-white/50">{workout.equipment}</p>
                                                    <p className="mt-2 text-xs font-bold text-white/50">
                                                        {Number(workout.duration || 0)} MIN · {Number(workout.calories || workout.caloriesBurned || 0)} CAL · ★ {workout.rating}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-2">
                                                    <Link href={`/workouts/${workout.id}`} className="rounded-lg border border-white/15 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/5">
                                                        View Details
                                                    </Link>

                                                    <button onClick={() => removeFromSaved(workout.id)} className="rounded-lg p-2 text-white/50 transition hover:bg-white/10 hover:text-white" aria-label="Remove">
                                                        <HiOutlineX size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>

                </div>
            </main>
        </>
    );
}