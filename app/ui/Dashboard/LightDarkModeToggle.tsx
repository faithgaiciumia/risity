import { Button } from "@/components/ui/button";
import {  Moon } from "lucide-react";

export default function LightDarkModeToggle() {
  return (
    <div>
      <Button variant="outline" size="icon">
        <Moon />
      </Button>
    </div>
  );
}
