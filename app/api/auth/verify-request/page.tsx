import { poppins, workSans } from "@/app/ui/fonts";
import TopBar from "@/app/ui/Login/TopBar";
import Link from "next/link";

export default function VerifyRequest() {
  return (
    <main>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <TopBar />
        {/* Decorative Top Section */}
        <div className="border-b border-gray-200 dark:border-gray-700 w-full h-[30vh]" />

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-600 w-[90%] sm:w-[60%] md:w-[40%] mx-auto -mt-24">
          <div className="flex flex-col gap-6 justify-center items-center">
            {/* Title */}
            <h1
              className={`${poppins.className} text-2xl font-bold text-gray-800 dark:text-gray-200`}
            >
              Login to Risity
            </h1>

            <div className="text-center">
              <h2 className={`${poppins.className} text-lg font-bold text-gray-800 dark:text-gray-200`}>
                Verification Email Sent
              </h2>
              <p className={`${workSans.className} text-sm text-gray-600 dark:text-gray-400 my-2`}>
                A login link has been sent to your email address. Please check
                your inbox and click the link to proceed.
              </p>
            </div>

            {/* Signup Prompt */}
            <p className={`${workSans.className} text-sm text-gray-500 dark:text-gray-300`}>
              Didn't receive it yet?{" "}
              <Link
                href="/"
                className="font-bold text-green-600 dark:text-green-400 hover:underline"
              >
                Resend Email
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
