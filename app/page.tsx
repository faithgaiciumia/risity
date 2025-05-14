"use client";
import Image from "next/image";
import Navbar from "./ui/Landing/Navbar";
import Hero from "./ui/Landing/Hero";
import KeyFeatures from "./ui/Landing/KeyFeatures";
import Footer from "./ui/Landing/Footer";
import { useViewStore } from "./store/viewStore";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <Footer />
    </Suspense>
  );
}
