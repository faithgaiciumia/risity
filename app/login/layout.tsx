import Link from "next/link";
import { poppins, workSans } from "../ui/fonts";
import TopBar from "../ui/Login/TopBar";
import { Suspense } from "react";
import Loading from "./loading";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <TopBar />
          {/* Decorative Top Section */}
          <div className="border-b border-gray-200 dark:border-gray-700 w-full h-[30vh]" />

          {/* Login Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 w-[90%] sm:w-[60%] md:w-[40%] mx-auto -mt-24">
            <div className="flex flex-col gap-6 justify-center items-center">
              {/* Title */}
              <h1 className={`${poppins.className} text-2xl font-bold text-gray-800 dark:text-white`}>
                Login to Risity
              </h1>

              {children}

              {/* Signup Prompt */}
              {/* <p className={`${workSans.className} text-sm text-gray-600 dark:text-gray-400`}>
                Don't have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-bold text-green-600 hover:underline"
                >
                  Create Account
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
