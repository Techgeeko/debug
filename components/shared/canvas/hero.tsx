"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const getRandomGradient = () => {
  const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `linear-gradient(120deg, ${color1} 0%, ${color2} 100%)`;
};

export default function Hero() {
  const [currentWord, setCurrentWord] = useState("Create");
  const [gradient, setGradient] = useState(getRandomGradient());
  const indexRef = useRef(0);

  useEffect(() => {
    const words = ["Create", "Track", "Send"];
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      setCurrentWord(words[indexRef.current]);
      setGradient(getRandomGradient());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-50 text-center py-16 px-6 sm:px-8 lg:px-12">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
          clipPath: "ellipse(150% 75% at 50% 25%)",
        }}
      ></div>

      {/* Title */}
      <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
        <span
          className="relative text-white px-3 py-1 rounded-lg inline-block"
          style={{
            background: gradient,
            backgroundSize: "200% 100%",
            animation: "pouring-animation 6s ease-in-out infinite",
          }}
        >
          {currentWord}
        </span>{" "}
        Quotes in Minutes,
        <br className="hidden sm:inline" /> Close Deals Faster
      </h2>

      {/* Description */}
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
        Save Time, Impress Clients, and Get Paid Sooner with
        <br className="hidden sm:inline" /> Instant Quote-To-Invoice Automation
      </p>

      {/* Call to Action */}
      <Link
        href="/sign-up"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg sm:text-xl px-8 py-4 rounded-lg font-semibold shadow-md transition-transform duration-200 transform hover:scale-105"
      >
        Create Quick Quote
      </Link>

      {/* Video Section */}
      <div className="mt-12">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-200 via-purple-50 to-purple-100 opacity-30 blur-lg"></div>
          <video
            src="/assets/videos/vid.mp4"
            className="relative z-10 rounded-lg shadow-lg w-full"
            loop
            muted
            autoPlay
            playsInline
          ></video>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes pouring-animation {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </section>
  );
}
