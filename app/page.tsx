"use client";
import Image from "next/image";
import Navbar from "./ui/Landing/Navbar";
import Hero from "./ui/Landing/Hero";
import KeyFeatures from "./ui/Landing/KeyFeatures";
import Footer from "./ui/Landing/Footer";
import { useViewStore } from "./store/viewStore";
import { useEffect } from "react";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <Footer />
    </>
  );
}
