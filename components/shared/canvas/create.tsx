import React from 'react';
import Image from 'next/image';

export default function Create() {
  return (
    <div>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="#signup"
            className="bg-yellow-500 text-lg sm:text-xl text-white px-6 sm:px-10 py-3 rounded-full font-medium shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Create
          </a>
          <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mt-8 text-gray-900 leading-snug">
            Seamlessly create <br className="hidden sm:inline" />quotes for clients
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 sm:p-12 mt-12 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-12">
          <Image
            src="/assets/images/create.png"
            width={350}
            height={150}
            className="w-full md:w-1/2 h-auto rounded-lg"
            alt="Create Image"
          />
          <div className="md:flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Effortlessly and on the go
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad est fugit at facere explicabo quam itaque laboriosam optio? Optio!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
