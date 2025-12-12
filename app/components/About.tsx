"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function useParallax(strength = 0.1) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1000], [0, 1000 * strength]);
}

export default function EnhancedAboutSection() {
  const sectionRef = useRef(null);
  const y = useParallax(0.1);

  const credentials = [
    {
      title: "16+ YEARS",
      desc: "Banking & leadership experience",
      color: "#C17B5C",
    },
    {
      title: "HIGHER EDUCATION",
      desc: "Lecturer in UK institutions",
      color: "#9B87C4",
    },
    {
      title: "CONSULTANT",
      desc: "Educational & business",
      color: "#8FA699",
    },
    {
      title: "QUALIFICATIONS",
      desc: "DBA, MBA, FHEA",
      color: "#C17B5C",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#F7EFE8] py-20 md:py-32 overflow-hidden"
    >
      {/* Sophisticated background elements */}
      <div className="absolute right-[-150px] top-[100px] w-[600px] h-[600px] bg-gradient-radial from-[#E6DAF5]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute left-[-100px] bottom-[100px] w-[500px] h-[500px] bg-gradient-radial from-[#C17B5C]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      {/* Image with parallax - Hidden on mobile, visible on md+ */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          className="absolute left-0 top-0 h-full w-[48%] md:w-[45%] lg:w-[42%] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        //   style={{ y }}
        >
          {/* Decorative frame effect */}
          {/* <div className="absolute inset-0 border-r-4 border-white/20 z-10" /> */}

          <Image
            src="/blackw3.jpg"
            alt="Dr Patricia Barnett-Quaicoo"
            fill
            priority
            className="object-cover object-center scale-95"
          />

          {/* Elegant gradient fade */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F7EFE8]" /> */}

          {/* Subtle color overlay */}
          {/* <div className="absolute inset-0 bg-[#C17B5C]/5 mix-blend-multiply" /> */}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center h-full">
        {/* Mobile Image - Only visible on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:hidden w-full h-[400px] relative rounded-lg overflow-hidden shadow-xs"
        >
          <Image
            src="/blackw3.jpg"
            alt="Dr Patricia Barnett-Quaicoo"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7EFE8]/50 to-transparent" />
        </motion.div>

        <div className="lg:col-start-2 relative z-10">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 md:mb-8"
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C17B5C]" />
            <span className="text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#C17B5C] font-medium uppercase">
              About Me
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#2C2420] text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight mb-6 md:mb-8"
          >
            Guiding People Toward{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                Clarity, Confidence & Growth
              </span>
              {/* Elegant underline */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-4 sm:h-5 text-[#C17B5C]"
                viewBox="0 0 400 20"
                fill="none"
              >
                <motion.path
                  d="M5 12 Q100 5, 200 10 T395 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.svg>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#5C5349] max-w-xl mb-8 md:mb-12"
          >
            With a blend of academic expertise, leadership experience, and a
            passion for personal development, I help individuals, parents and
            professionals take meaningful steps toward clarity, direction and
            sustainable progress.
          </motion.p>

          {/* Credentials Grid - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 md:mb-12"
          >
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative group cursor-default"
              >
                {/* Subtle background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${item.color}08` }}
                />

                <div className="relative p-3 sm:p-4">
                  {/* Colored accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "30px" }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-[2px] mb-2 sm:mb-3 group-hover:w-12 transition-all duration-500"
                    style={{ backgroundColor: item.color }}
                  />

                  <p
                    className="text-xs sm:text-sm font-semibold tracking-wide mb-1 sm:mb-2 transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5C5349] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Signature with elegant animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-6 md:mb-10"
          >
            <div className="relative inline-block">
              {/* Decorative element behind signature */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-[#C17B5C]/8 rounded-full blur-xl"
              />

              <p className="relative font-['Allura'] text-4xl sm:text-5xl text-[#C17B5C] select-none">
                Patricia
              </p>
            </div>
          </motion.div>

          {/* CTA Button - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 sm:gap-3 group"
              >
                <span className="text-[#C17B5C] font-light text-sm sm:text-base tracking-wide">
                  Read My Story
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[#C17B5C] text-base sm:text-lg"
                >
                  →
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Decorative quote mark - Hidden on mobile and small tablets */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.04 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute -right-10 top-0 text-[200px] font-serif text-[#C17B5C] leading-none select-none pointer-events-none hidden lg:block"
          >
            &quot;
          </motion.div>
        </div>
      </div>
    </section>
  );
}