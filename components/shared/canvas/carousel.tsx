"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from 'swiper/modules'; // Import Swiper modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Create from "@/components/shared/canvas/create";
import Track from "@/components/shared/canvas/track";
import Send from "@/components/shared/canvas/send";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]} // Add Swiper modules here
    >
      {/* Slide 1: Create */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Create />
        </motion.div>
      </SwiperSlide>

      {/* Slide 2: Track */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Track />
        </motion.div>
      </SwiperSlide>

      {/* Slide 3: Send */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Send />
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
}

