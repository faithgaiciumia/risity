"use client";
import Link from "next/link";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import LogoutButton from "./LogoutButton";

export default function UserProfile({ email }: { email: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="flex items-center space-x-2 cursor-pointer group"
      >
        <BiUserCircle className="h-6 w-6 cursor-pointer transition-transform duration-300 group-hover:scale-110" />
        {isHovered && (
          <span className="text-sm font-medium text-gray-600">Profile</span>
        )}
      </div>
      {isDrawerOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-4 z-50">
          <p className="font-semibold border-b pb-2">{email}</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/saved-recipes"
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                View Saved Recipes
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
