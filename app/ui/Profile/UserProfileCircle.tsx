import { workSans } from "../fonts";

export default function UserProfileCircle() {
  return (
    <div className="rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center border border-gray-300 dark:border-gray-600 shadow-sm">
      <h1 className={`${workSans.className} font-bold text-lg md:text-xl`}>
        F
      </h1>
    </div>
  );
}
