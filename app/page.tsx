import Image from "next/image";
import Navbar from "./ui/Landing/Navbar";
import Hero from "./ui/Landing/Hero";
import KeyFeatures from "./ui/Landing/KeyFeatures";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <KeyFeatures/>
    </>
  );
}
