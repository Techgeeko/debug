"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200); // Show button after 200px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg text-white bg-[#0056D2] transition-transform transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            } duration-300`}
            aria-label="Back to Top"
        >
            ↑
        </button>
    );
}
