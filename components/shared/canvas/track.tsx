import React from 'react';
import Image from 'next/image';

export default function Track() {
  return (
    <div>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="#signup"
            className="bg-purple-500 text-lg sm:text-xl text-white px-6 sm:px-10 py-3 rounded-full font-medium shadow-lg hover:bg-purple-600 transition-colors duration-300"
          >
            Track
          </a>
          <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mt-8 text-gray-900 leading-snug">
            Track Sent Quotes Anytime <br className="hidden sm:inline" />
            to determine open rates
          </h3>
        </div>

        <div className="flex flex-col md:flex-row mt-12 space-y-6 md:space-y-0 md:space-x-6 rounded-lg bg-purple-50 p-8 shadow-md">
          {/* Left Column */}
          <div className="flex-1 bg-purple-100 p-8 rounded-lg flex flex-col justify-between shadow-sm">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/images/drawer.svg"
                width={64}
                height={64}
                alt="Icon"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <p className="font-semibold text-lg text-gray-800">Quick Quote</p>
                <p className="text-sm text-gray-500">System Tracking</p>
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-purple-900 font-bold mt-6 leading-snug">
              Flexible and easy-to-use Quote Tracking
            </p>
            <button className="bg-white text-purple-500 w-10 h-10 flex items-center justify-center rounded-full shadow-md mt-6 hover:bg-purple-200 transition-colors duration-300">
              +
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 bg-purple-200 p-8 rounded-lg flex flex-col items-center shadow-sm">
            <div>
              <p className="font-semibold text-lg text-gray-800">Total Quotes</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">20</p>
            </div>
            <div className="relative w-24 h-24 mt-8">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                />
                <path
                  className="text-yellow-500"
                  d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  strokeDasharray="75, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">
                +75%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
