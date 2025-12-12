"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EnhancedLogoCarousel() {
  const logos = [
    "/logo1.svg",
    "/logo2.svg",
    "/logo4.svg",
    "/logo5.svg",
    "/logo6.svg",
    "/logo7.svg",
  ];

  return (
    <section className="relative bg-[#F5F1E8] py-20 border-y border-[#E6DCCE]/60 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F1E8]/80 to-transparent" />

      {/* Decorative background elements */}
      <div className="absolute left-1/4 top-0 w-64 h-64 bg-[#B8B5D4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-[#9B6B5C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-r from-transparent to-[#9B6B5C]"
            />
            <p className="text-xs tracking-[0.3em] text-[#9B6B5C] font-medium uppercase">
              Featured • Trusted • Collaborated With
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-l from-transparent to-[#9B6B5C]"
            />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif font-light text-[#2B3A67]"
          >
            Recognized Excellence
          </motion.h3>
        </motion.div>

        {/* Logo Carousel Container */}
        <div className="relative">
          {/* Gradient fade edges - more pronounced */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F1E8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F1E8] to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-6xl overflow-hidden">
              {/* Scrolling logos */}
              <div className="logo-marquee flex items-center gap-16">
                {[...logos, ...logos, ...logos].map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 h-20 w-32 flex items-center justify-center group cursor-pointer relative"
                  >
                    {/* Subtle background on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-white/40 rounded-lg backdrop-blur-sm"
                    />

                    <Image
                      src={src}
                      alt={`Partner logo ${(i % logos.length) + 1}`}
                      width={120}
                      height={50}
                      className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
                    />

                    {/* Colored accent on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 0.15, scale: 1 }}
                      className="absolute inset-0 bg-[#9B6B5C] rounded-lg blur-xl"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional: Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center gap-12 flex-wrap"
        >
          {[
            { number: "50+", label: "Workshops Delivered" },
            { number: "200+", label: "Professionals Coached" },
            { number: "15+", label: "Organizations Served" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-serif font-light text-[#9B6B5C] mb-1"
              >
                {stat.number}
              </motion.p>
              <p className="text-xs uppercase tracking-wider text-[#5C5349] opacity-70">
                {stat.label}
              </p>
              {/* Subtle underline on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-[1px] bg-[#9B6B5C] mx-auto mt-2"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .logo-marquee {
          display: flex;
          align-items: center;
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .logo-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
