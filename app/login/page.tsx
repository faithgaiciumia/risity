import Link from "next/link";
import { poppins, workSans } from "../ui/fonts";
import TopBar from "../ui/Login/TopBar";
import EmailSignIn from "../ui/Login/EmailSignIn";
import GoogleSignIn from "../ui/Login/GoogleSignIn";
import FacebookSignIn from "../ui/Login/FacebookSignin";
import { FaEnvelope } from "react-icons/fa6";

export default function Login() {
  return (
    <>
      {/* Login Buttons */}
      <div className="w-full space-y-3">
        <Link href={"/login/email"}>
          <button
            type="submit"
            className="mt-6 w-[90%] mx-auto flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:border-green-400 dark:hover:border-green-500 transition"
          >
            <FaEnvelope className="text-black dark:text-gray-200 text-lg transition" />
            Continue with Email
          </button>
        </Link>
        <GoogleSignIn />
        <FacebookSignIn />
      </div>
    </>
  );
}
