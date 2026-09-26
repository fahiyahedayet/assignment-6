import Navbar from "@/app/components/Navbar";
import { CiBookmark } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import WorkoutActions from "@/app/components/WorkoutActions";

import SaveWorkoutButton from "@/app/components/SaveWorkoutButton";

type WorkoutDetailsProps = {
    params: Promise<{
        id: string;
    }>;
};

type Workout = {
    id: string;
    name: string;
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

export default async function WorkoutDetails({
    params,
}: WorkoutDetailsProps) {
    const { id } = await params;

    const response = await fetch(
       `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    const workout: Workout = await response.json();

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#0f1014] px-5 py-10 text-white md:px-8 lg:py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

                    
                        <div className="overflow-hidden rounded-2xl"><img src={workout.image} alt={workout.name} className="h-full min-h-[500px] w-full object-cover lg:min-h-[680px]"/>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl">{workout.name}
                                </h1>

                                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">  {workout.description}
                                </p>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {workout.muscleGroups.map((muscle) => (
                                    <span key={muscle} className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold text-black"
                                    >{muscle}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#171920]">

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60"> Equipment
                                    </span>
                                    <span className="text-sm font-bold text-white"> {workout.equipment}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60">Difficulty
                                    </span>
                                    <span className="text-sm font-bold text-white">{workout.difficulty}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60">  Sets
                                    </span>
                                    <span className="text-sm font-bold text-white"> {workout.sets}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60"> Reps
                                    </span>
                                    <span className="text-sm font-bold text-white"> {workout.reps}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60"> Duration
                                    </span>
                                    <span className="text-sm font-bold text-white">{workout.duration} min
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60"> Calories
                                    </span>
                                    <span className="text-sm font-bold text-white"> {workout.caloriesBurned} kcal
                                    </span>
                                </div>
                                <div className="flex items-center justify-between px-5 py-4">
                                    <span className="text-xs font-bold uppercase text-white/60"> Rating
                                    </span>

                                    <span className="text-sm font-bold text-white">  {workout.rating}
                                    </span>
                                </div>

                            </div>
                            <div className="mt-8">
                                <h2 className="text-lg font-black uppercase">  Instructions
                                </h2>

                                <ol className="mt-4 space-y-4">
                                    {workout.instructions.map(
                                        (instruction, index) => (
                                            <li key={index}
                                                className="flex gap-3 text-sm leading-6 text-white/75"
                                            >
                                                <span className="shrink-0 text-white/50">
                                                    {index + 1}.
                                                </span>
                                                <span> {instruction}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ol>

                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">

                                 <WorkoutActions workout={workout} />

                                <SaveWorkoutButton workout={workout} />

                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}