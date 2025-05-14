import { poppins, workSans } from "../fonts";
import Link from "next/link";
import { getSession } from "@/app/lib/getsession";

export default  function Hero() {
  // const session = await getSession();

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

      {/* <Link href="/dashboard">
        <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 transition text-white text-sm rounded-lg shadow dark:bg-green-600 dark:hover:bg-green-700">
          {session?.user?.email ? "To Dashboard" : "Get Started (free)"}
        </button>
      </Link> */}
    </section>
  );
}
