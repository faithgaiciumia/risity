import { loginStore } from "@/app/store/loginStore";
import Link from "next/link";
import { useEffect } from "react";

export default function MainActionButton() { 

  return (
    <Link href="/dashboard">
      <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 transition text-white text-sm rounded-lg shadow dark:bg-green-600 dark:hover:bg-green-700">
        Get Started (free)
      </button>
    </Link>
  );
}
