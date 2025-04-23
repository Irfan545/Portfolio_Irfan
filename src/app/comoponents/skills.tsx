"use client";
// components/SkillsSection.tsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IconType } from "react-icons";

type SkillCardProps = {
  Icon: IconType;
  title: string;
  bg: string;
  iconColor?: string;
};

const skills = [
  {
    Icon: FaJsSquare,
    title: "JavaScript",
    bg: "bg-lime-200",
    iconColor: "#facc15",
  },
  {
    Icon: FaReact,
    title: "React",
    bg: "bg-sky-800",
    iconColor: "#60a5fa",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.JS",
    bg: "bg-gray-300",
    iconColor: "#111",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.JS",
    bg: "bg-gray-300",
    iconColor: "#111",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.JS",
    bg: "bg-gray-300",
    iconColor: "#111",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.JS",
    bg: "bg-gray-300",
    iconColor: "#111",
  },
];

const SkillsCard: React.FC<SkillCardProps> = ({
  Icon,
  title,
  bg,
  iconColor = "#000",
}) => {
  return (
    <div
      className={`rounded-4xl h-48 flex flex-col justify-center items-center ${bg}`}
    >
      <Icon size={60} color={iconColor} />
      <p className="mt-4 font-large text-black">{title}</p>
    </div>
  );
};
const SkillsSection: React.FC = () => {
  return (
    <section className="bg-transparent text-white py-16 px-4 md:px-20 overflow-hidden ">
      <div className="flex flex-col md:flex-row items-start gap-12 mb-12 pt-6">
        {/* Left Text */}
        <div>
          <p className="text-sm text-gray-400 mb-1">2 years of</p>
          <h2 className="text-4xl font-bold">XP</h2>
          <p className="text-sm text-gray-500 mt-2">
            with the most popular ecosystem frontend.
          </p>
        </div>

        {/* Skills Carousel */}
        <div className="w-full max-w-4xl pb-10">
          <Swiper
            // ref={swiperRef}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500, // 2.5 seconds between slides
              disableOnInteraction: false, // keeps sliding even after user interaction
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1.2}
            speed={500}
            breakpoints={{
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <SkillsCard {...skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
