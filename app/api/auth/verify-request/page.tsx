import { poppins, workSans } from "@/app/ui/fonts";
import TopBar from "@/app/ui/Login/TopBar";
import Link from "next/link";

export default function VerifyRequest() {
  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        {/* Decorative Top Section */}
        <div className="border-b border-gray-200 w-full h-[30vh]" />

        {/* Login Card */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 w-[90%] sm:w-[60%] md:w-[40%] mx-auto -mt-24">
          <div className="flex flex-col gap-6 justify-center items-center">
            {/* Title */}
            <h1
              className={`${poppins.className} text-2xl font-bold text-gray-800`}
            >
              Login to Risity
            </h1>

            <div className="text-center">
              <h2 className={`${poppins.className} text-lg font-bold text-gray-800`}>Verification Email Sent</h2>
              <p className={`${workSans.className} text-sm text-gray-600 my-2`}>
                A login link has been sent to your email address. Please check
                your inbox and click the link to proceed.
              </p>
            </div>

            {/* Signup Prompt */}
            <p className={`${workSans.className} text-sm text-gray-600`}>
              Don't have an account yet?{" "}
              <Link
                href="/signup"
                className="font-bold text-green-600 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
