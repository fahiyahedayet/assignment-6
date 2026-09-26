"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { usePlan, Workout } from "../context/PlanContext";

type WorkoutActionsProps = {
    workout: Workout;
};

export default function WorkoutActions({
    workout,
}: WorkoutActionsProps) {
    const { plan, addToPlan } = usePlan();
    const router = useRouter();

    const handleAddToPlan = () => {
        const alreadyExists = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.info("Already in today's plan");
            return;
        }

        if (plan.length >= 5) {
            toast.warning("Today's plan is full");
            return;
        }

        addToPlan(workout);

        toast.success("Added to today's plan");

        router.push("/my-plan");
    };

    return (
        <button
            onClick={handleAddToPlan}
            className="inline-flex items-center gap-2 rounded-xl bg-[#CCFF00] px-5 py-3 text-sm font-black text-black transition hover:brightness-95"
        >
            <MdCheckBoxOutlineBlank size={20} />
            Add to today's plan
        </button>
    );
}