import Link from "next/link";
import { poppins, workSans } from "../fonts";

export default function Footer() {
  return (
    <footer className="bg-green-100 dark:bg-green-900 text-gray-700 dark:text-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2 text-sm">
        <div>
          © 2025{" "}
          <Link
            href="https://gaiciumiafaith.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-black dark:text-white font-bold hover:underline ${poppins.className}`}
          >
            Gaiciumia Faith
          </Link>
        </div>
        <div>
          <span className={`${workSans.className} text-gray-600 dark:text-gray-400`}>
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
