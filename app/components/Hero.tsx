"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EnhancedHeroHeader() {
  const imageUrl = "/blackw3.jpg";

  const credentials = [
    {
      label: "16+ years",
      desc: "Banking & industry experience",
      color: "#C17B5C",
    },
    {
      label: "Higher Education",
      desc: "Lecturer & course leader",
      color: "#9B87C4",
    },
  ];

  return (
    <header className="relative w-full min-h-screen overflow-hidden bg-[#F7EFE8]">
      {/* GRAIN TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('/grain.png')]" />

      {/* ELEGANT BACKGROUND ELEMENTS - Optimized */}
      <div className="absolute top-[-300px] right-[-200px] w-[800px] h-[800px] bg-[#CFCEFE]/8 rounded-full blur-xl pointer-events-none will-change-auto" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#C17B5C]/6 rounded-full blur-xl pointer-events-none will-change-auto" />

      {/* IMAGE RIGHT SIDE - Optimized for Safari */}
      <div className="absolute inset-0 pointer-events-none hidden md:block animate-fadeIn">
        <div className="absolute right-0 top-0 h-full w-[55%] md:w-[52%] lg:w-[50%] overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt="Dr Patricia Barnett-Quaicoo"
              fill
              priority
              className="object-cover object-center opacity-90"
              quality={85}
            />
          </div>
          {/* Subtle color overlay for cohesion */}
          <div className="absolute inset-0 bg-[#C17B5C]/8 mix-blend-multiply" />
        </div>
      </div>

      {/* DECORATIVE CIRCLE - Simplified */}
      <div className="absolute left-[-220px] top-[-220px] pointer-events-none z-10 hidden lg:block opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
        <svg width="650" height="650" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="300" fill="rgba(207, 206, 254, 0.12)" />
          <circle cx="300" cy="300" r="250" fill="rgba(193, 123, 92, 0.08)" />
        </svg>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full md:w-3/4 lg:w-1/2 lg:pr-12 py-24 md:py-32 lg:py-0">
          {/* Mobile Image Section - Only visible on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="md:hidden relative w-full h-[45vh] min-h-[350px] mb-8 rounded-lg overflow-hidden shadow-xs "
          >
            <Image
              src={imageUrl}
              alt="Dr Patricia Barnett-Quaicoo"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7EFE8]/60 to-transparent" />
            {/* <div className="absolute inset-0 bg-[#C17B5C]/5 mix-blend-multiply" /> */}
          </motion.div>

          {/* OVERLINE with decorative elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="flex items-center gap-3 sm:gap-4 mb-6"
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C17B5C]" />
            <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#7A6F60] font-medium">
              Training • Coaching • Consultancy
            </p>
          </motion.div>

          {/* NAME - More dramatic */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight text-[#2C2420] mb-6"
          >
            Dr. Patricia
            <br />
            <span className="font-light">Barnett-Quaicoo</span>
          </motion.h1>

          {/* ELEGANT DIVIDER - Animated */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-[#C17B5C] to-[#9B87C4] mb-6 sm:mb-8"
          />

          {/* SUBTEXT - Enhanced typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[#5C5349] max-w-xl mb-8 sm:mb-10"
          >
            Empowering leaders, parents and professionals to gain{" "}
            <span className="text-[#C17B5C] font-normal">clarity</span>, build{" "}
            <span className="text-[#9B87C4] font-normal">confidence</span> and
            achieve meaningful, sustainable{" "}
            <span className="text-[#8FA699] font-normal">growth</span> in life
            and work.
          </motion.p>

          {/* ENHANCED CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.1 }}
            className="mb-10 sm:mb-12"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 sm:gap-3 bg-[#8b3d2f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#9B87C4] to-[#C17B5C]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10 font-light tracking-wide text-sm sm:text-base">
                  Book a Free Session
                </span>
                <span className="relative z-10">
                  →
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* CREDENTIALS - Enhanced with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.1 }}
            className="flex flex-wrap gap-6 sm:gap-8 md:gap-10"
          >
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay:  0.2, duration: 0.1 }}
                className="group relative cursor-default hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Subtle background on hover */}
                <div
                  className="absolute inset-0 -inset-x-3 sm:-inset-x-4 -inset-y-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${item.color}08` }}
                />

                <div className="relative">
                  {/* Colored accent line */}
                  <div
                    className="h-[2px] w-5 mb-1 sm:mb-2 group-hover:w-8 sm:group-hover:w-10 transition-all duration-500"
                    style={{ backgroundColor: item.color }}
                  />

                  <p
                    className="text-xs sm:text-sm uppercase tracking-wide font-medium mb-1 transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5C5349] font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative quote element - Hidden on smaller screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            className="absolute -left-8 bottom-20 text-[180px] font-serif text-[#C17B5C] leading-none select-none pointer-events-none hidden xl:block"
          >
            &quot;
          </motion.div>
        </div>
      </div>

      {/* ELEGANT BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#F7EFE8] to-transparent pointer-events-none hidden md:block" />

      {/* Scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex opacity-0 animate-fadeIn" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center gap-2 text-[#C17B5C] opacity-60 animate-bounce">
          <span className="text-xs tracking-wider uppercase font-light">
            Scroll
          </span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <path
              d="M10 5 L10 20 M10 20 L6 16 M10 20 L14 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
