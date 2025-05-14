"use client";

import Experience from "@/components/experience";
import MainSection from "@/components/mainSection";
import Skils from "@/components/skils";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/navbar";
import Project from "@/components/project";
import ContactDetails from "@/components/contact-details";
import Footer from "@/components/footer";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // global duration
      once: false, // re-trigger on scroll
    });

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <main id="About" className="relative min-h-screen">
      {/* Navbar */}
      <div className="fixed z-20 w-full">
        <Navbar />
      </div>

      <div className="relative h-full w-full">
        <video
          src="/3141208-uhd_3840_2160_25fps.mp4"
          ref={videoRef}
          autoPlay
          muted
          loop
          className="lg:h-auto h-screen object-fill fixed  opacity-15"
        ></video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container p-4 md:p-7 pt-20 md:pt-24">
          <MainSection />
        </div>
        <div className="container p-4 space-y-10 md:p-7">
          <Skils />
          <Project />
          <Experience />
          <ContactDetails />
        </div>
        <Footer />
      </div>
    </main>
  );
}
