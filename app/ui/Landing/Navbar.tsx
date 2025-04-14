"use client";
import { BiCalculator, BiMenu } from "react-icons/bi";
import { poppins } from "../fonts";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/auth";
import { getSession } from "@/app/lib/getsession";

export default async function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const session = await getSession();
    return (
    <nav className="w-full border-b border-gray-200 fixed top-0 left-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BiCalculator className="text-green-500 text-2xl" />
            <h1 className={`${poppins.className} text-xl font-semibold`}>
              Risity
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 text-sm text-gray-700">
              <li>
                <Link
                  href="#features"
                  className="hover:text-green-500 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/your-repo"
                  target="_blank"
                  className="hover:text-green-500 transition"
                >
                  View Source
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              {session?.user ? (
                <p className="text-sm text-gray-600">Welcome back {session.user.email}</p>
              ) : (
                <Link href={"/login"}>
                  <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition">
                    Log in
                  </button>
                </Link>
              )}
              {/* <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Sign up
              </button> */}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <BiMenu className="text-2xl text-green-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
    </nav>
  );
}
