"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Jane Doe",
    position: "CEO, Acme Corp",
    feedback:
      "&quot;Quick Quote has transformed the way we handle proposals. It&apos;s fast, efficient, and incredibly user-friendly.&quot;",
    image: "/images/jane.jpg",
  },
  {
    name: "John Smith",
    position: "Founder, Startup XYZ",
    feedback:
      "&quot;This platform has saved us countless hours. The ability to track and manage quotes seamlessly is a game-changer.&quot;",
    image: "/images/john.jpg",
  },
  {
    name: "Emily Carter",
    position: "Operations Manager, Bright Tech",
    feedback:
      "&quot;I highly recommend Quick Quote. It&apos;s intuitive and has all the features you need for effective proposal management.&quot;",
    image: "/images/emily.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonial" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
            <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              width={16}
              height={16}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p
              className="text-gray-700 italic mb-4"
              dangerouslySetInnerHTML={{ __html: testimonials[activeIndex].feedback }}
            />
            <h3 className="text-lg font-medium">
              {testimonials[activeIndex].name}
            </h3>
            <span className="text-sm text-gray-500">
              {testimonials[activeIndex].position}
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={handlePrev}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full p-2 mx-2 focus:outline-none"
            >
              <span className="sr-only">Previous</span>
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full p-2 mx-2 focus:outline-none"
            >
              <span className="sr-only">Next</span>
              &#8594;
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="mt-4 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
