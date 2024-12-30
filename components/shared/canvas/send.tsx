import React from 'react';
import Image from 'next/image';

export default function Send() {
  return (
    <div>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="#signup"
            className="bg-blue-500 text-lg sm:text-xl text-white px-6 sm:px-10 py-3 rounded-full font-medium shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Send
          </a>
          <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mt-8 text-gray-900 leading-snug">
            Send quotes in seconds <br className="hidden sm:inline" />
            plus one-click auto invoice
          </h3>
        </div>

        <div className="bg-blue-100 p-6 sm:p-10 mt-12 rounded-lg shadow-md max-w-4xl mx-auto">
          <Image
            src="/assets/images/send.png"
            width={250}
            height={150}
            className="w-full h-auto rounded-lg"
            alt="Send Image"
            priority
          />
        </div>
      </section>
    </div>
  );
}
