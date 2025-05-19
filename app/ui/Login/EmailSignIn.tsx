"use client";
import { FaEnvelope, FaSpinner } from "react-icons/fa6";
import { poppins } from "../fonts";
import { useActionState } from "react";
import { signInWithResend } from "@/app/lib/actions";
import { useAuthStore } from "@/app/store/useAuthStore";

export default function EmailSignIn() {
  const setEmail = useAuthStore((state) => state.setEmail);
  const [errorMessage, formAction, isPending] = useActionState(
    async (prevState: string | undefined, formData: FormData) => {
      // Extract email before sending
      const email = formData.get("email")?.toString();
      if (email) setEmail(email);
      return await signInWithResend(prevState, formData);
    },
    undefined
  );

  return (
    <form action={formAction}>
      <div>
        <label className={`mb-4 font-bold ${poppins.className}`}>
          Email Address
        </label>
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="yourname@example.com"
          className={`w-full border px-2 py-4 mt-2 border-gray-700 dark:border-gray-600 text-sm ${poppins.className} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200`}
        />
      </div>
      <button
        type="submit"
        aria-disabled={isPending}
        className="mt-6 w-[300px] flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-green-600 text-white px-6 py-4 text-sm font-medium shadow-sm hover:bg-green-900 dark:hover:bg-green-700 hover:text-white transition"
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            <FaSpinner className="animate-spin" /> Logging in...
          </span>
        ) : (
          "Log In"
        )}
      </button>
    </form>
  );
}
