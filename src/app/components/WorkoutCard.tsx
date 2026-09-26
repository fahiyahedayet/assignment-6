import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { HiFire } from "react-icons/hi";

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

type WorkoutCardProps = {
  workout: Workout;
};
export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`} className="block overflow-hidden rounded-2xl bg-[#171920] p-3 transition hover:border-white/20 border border-transparent">
      
      <div className="h-56 overflow-hidden rounded-xl"> <img src={workout.image} alt={workout.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="p-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span key={muscle} className="rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-black uppercase text-black">{muscle}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight text-white">{workout.name}</h3>
        <p className="mt-1 text-sm text-white/50">{workout.equipment}</p>
        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-xs font-bold text-white/70">
          <span className="flex items-center gap-1.5"> <FiClock className="text-white/50" size={14} />{workout.duration} min
          </span>
          <span className="flex items-center gap-1.5"> <HiFire  className="text-orange-400" size={14} /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1"> <FiStar className="text-yellow-400 fill-yellow-400" size={14} />{workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}