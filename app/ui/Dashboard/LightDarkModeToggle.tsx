"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LightDarkModeToggle() {
  // initialize
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    //check what theme the file is in
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);
  const toggle = () => {
    //get all the html elements
    const html = document.documentElement;
    //if in dark mode, remove dark classname
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // if it was initially in light mode add the dark classname to the element
      html.classList.add("dark");
      setIsDarkMode(true);
    }
  };
  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggle}>
        {isDarkMode ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
