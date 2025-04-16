"use client";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BiMenu className="text-2xl text-green-600" />
      </button>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="#features" className="block hover:text-green-500">
                Features
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                className="block hover:text-green-500"
              >
                View Source
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <button className="w-full px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition">
              Log in
            </button>
            {/* <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Sign up
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
