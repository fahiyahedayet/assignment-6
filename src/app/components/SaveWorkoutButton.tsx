"use client";

import { toast } from "react-toastify";
import { CiBookmark } from "react-icons/ci";
import { usePlan, Workout } from "../context/PlanContext";

type SaveWorkoutButtonProps = {
    workout: Workout;
};

export default function SaveWorkoutButton({
    workout,
}: SaveWorkoutButtonProps) {
    const { saved, addToSaved } = usePlan();

    const handleSave = () => {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.info("Already saved");
            return;
        }

        addToSaved(workout);
        toast.success("Saved for later");
    };

    return (
        <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-bold text-white transition hover:bg-white/5"
        >
            <CiBookmark size={20} />
            Save for later
        </button>
    );
}