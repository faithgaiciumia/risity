import { poppins, workSans } from "../fonts";
import Link from "next/link";
import { getSession } from "@/app/lib/getsession";
import MainActionButton from "./MainActionButton";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 gap-6 bg-white dark:bg-gray-900">
      <span className="text-sm text-gray-500 tracking-wide dark:text-gray-300">
        Welcome to Risity
      </span>

      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 ${poppins.className} max-w-2xl`}
      >
        Your ultimate invoice partner for business
      </h1>

      <h2
        className={`text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl ${workSans.className}`}
      >
        Generate your invoices, organize them with ease, and share them
        professionally with your clients.
      </h2>

      <MainActionButton />
    </section>
  );
}
