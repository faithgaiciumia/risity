"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-white dark:bg-[#0f172a]">
      {isDarkMode ? (
        <img
          src="/loading-spinner-dark.gif"
          alt="loading"
          className="w-16 h-16"
        />
      ) : (
        <img src="/loading-spinner.gif" alt="loading" className="w-16 h-16" />
      )}
    </div>
  );
}
