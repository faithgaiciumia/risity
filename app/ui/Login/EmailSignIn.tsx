import { FaEnvelope } from "react-icons/fa6";

export default function EmailSignIn() {
  return (
    <form>
      <button
        type="submit"
        className="mt-6 w-[90%] mx-auto flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-4 text-sm font-medium text-gray-700 shadow-sm hover:border-green-400 transition"
      >
        <FaEnvelope className="text-black  text-lg transition" />{" "}
        Continue with Email
      </button>
    </form>
  );
}
