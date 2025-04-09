import { poppins, workSans } from "../fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 gap-6 bg-white">
      <span className="text-sm text-gray-500 tracking-wide">Welcome to Risity</span>

      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 ${poppins.className} max-w-2xl`}>
        Your ultimate invoice partner for business
      </h1>

      <h2 className={`text-base md:text-lg text-gray-600 max-w-xl ${workSans.className}`}>
        Generate your invoices, organize them with ease, and share them professionally with your clients.
      </h2>

      <Link href="/dashboard">
        <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 transition text-white text-sm rounded-lg shadow">
          Get Started
        </button>
      </Link>
    </section>
  );
}
