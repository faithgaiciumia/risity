"use client";
import { handleSignOut } from "@/app/lib/actions";
import { useActionState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function LogoutButton() {
  const [errorMessage, logoutAction, isPending] = useActionState(
    handleSignOut,
    undefined
  );

  return (
    <form action={logoutAction}>
      <button
        className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
        type="submit"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <FaSpinner />
            Logging out...
          </>
        ) : (
          "Log Out"
        )}
      </button>
    </form>
  );
}
