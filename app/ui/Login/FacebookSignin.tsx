import { FaFacebook } from "react-icons/fa6";

export default function FacebookSignIn() {
  return (
    <form>
      <button
        type="submit"
        className="mt-6 w-[90%] mx-auto flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:border-green-400 dark:hover:border-green-500 transition"
      >
        <FaFacebook className="text-blue-700 dark:text-blue-500 text-lg transition" />{" "}
        Continue with Facebook
      </button>
    </form>
  );
}
