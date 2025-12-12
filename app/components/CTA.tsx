"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { User, Mail } from "lucide-react";

// Shadcn-style Input components
const InputGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex items-center">{children}</div>
);

const InputGroupInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  className = "",
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className={`flex h-11 w-full rounded-lg border border-[#E8DCCE] bg-white/50 px-4 pr-10 text-sm font-light text-[#2C2420] placeholder:text-[#7A6F60]/50 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-300 ${className}`}
  />
);

const InputGroupAddon = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <div
    className="absolute right-3 flex items-center pointer-events-none"
    style={{ color }}
  >
    {children}
  </div>
);

const ctaPaths = [
  {
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Book Free Consultation",
    description:
      "Schedule a complimentary 30-minute session to discuss your goals and explore how I can help.",
    buttonText: "Book Now",
    href: "/contact",
    color: "#C17B5C",
    isPrimary: true,
    gradient: "from-[#C17B5C] to-[#B36A4D]",
    hasForm: true,
  },
  {
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Download Free Guide",
    description:
      "Get my exclusive guide on building clarity and confidence in your professional journey.",
    buttonText: "Download",
    href: "/resources",
    color: "#9B87C4",
    isPrimary: false,
    gradient: "from-[#9B87C4] to-[#8A76B3]",
    hasForm: true,
  },
  {
    iconPath:
      "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    title: "Explore Services",
    description:
      "Discover the full range of training, coaching, and consultancy services tailored to your needs.",
    buttonText: "Learn More",
    href: "/services",
    color: "#8FA699",
    isPrimary: false,
    gradient: "from-[#8FA699] to-[#7E9588]",
    hasForm: false,
  },
];

export default function MultiPathCTA() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F7EFE8] to-[#F7EFE8] py-20 md:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#CFCEFE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C17B5C]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C17B5C]" />
              <span className="text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#7A6F60] font-medium uppercase">
                Take Action
              </span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C17B5C]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#2C2420] mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-[#5C5349] max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            Choose the path that best fits where you are today. Whether
            you&apos;re ready to commit, want to learn more, or simply explore
            your options — I&apos;m here to support your growth.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-[#C17B5C] via-[#9B87C4] to-[#8FA699] mx-auto mt-8"
          />
        </div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {ctaPaths.map((path, i) => (
            <CTACard key={i} path={path} index={i} />
          ))}
        </div>

        {/* Bottom Trust Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-xs sm:text-sm text-[#7A6F60] font-light">
            Join hundreds of professionals who have transformed their careers
            and lives
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CTACard({
  path,
  index,
}: {
  path: (typeof ctaPaths)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form or show success message
      setFormData({ name: "", email: "" });
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute -inset-2 rounded-2xl blur-xl"
        style={{ backgroundColor: path.color }}
      />

      {/* Main Card */}
      <div
        className={`relative h-full bg-white backdrop-blur-sm border-2 ${
          path.isPrimary ? "border-[#C17B5C]/40" : "border-white/60"
        } rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col ${
          path.isPrimary ? "md:scale-105" : ""
        }`}
      >
        {/* Primary badge */}
        {path.isPrimary && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C17B5C] to-[#B36A4D] text-white text-xs font-medium px-3 sm:px-4 py-1 rounded-full shadow-lg"
          >
            Most Popular
          </motion.div>
        )}

        {/* Subtle gradient overlay on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.04 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 rounded-2xl"
          style={{ backgroundColor: path.color }}
        />

        {/* Icon with animated background */}
        <div className="relative mb-6 inline-block">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.15 : 0.1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: path.color }}
          />
          <motion.div
            animate={{
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${path.color}15` }}
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke={path.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d={path.iconPath} />
            </svg>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-light mb-4 text-[#2C2420]">
          {path.title}
        </h3>

        {/* Colored accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: isHovered ? "60px" : "40px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] mb-6"
          style={{ backgroundColor: path.color }}
        />

        {/* Description */}
        <p className="text-[#5C5349] leading-relaxed mb-6 sm:mb-8 font-light text-sm sm:text-[15px] flex-1">
          {path.description}
        </p>

        {/* Form or CTA Button */}
        {path.hasForm ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputGroup>
              <InputGroupInput
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="focus:ring-opacity-20"
              />
              <InputGroupAddon color={path.color}>
                <User className="w-4 h-4" />
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupInput
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="focus:ring-opacity-20"
              />
              <InputGroupAddon color={path.color}>
                <Mail className="w-4 h-4" />
              </InputGroupAddon>
            </InputGroup>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full text-center py-3 sm:py-4 rounded-lg font-light tracking-wide transition-all duration-300 overflow-hidden ${
                path.isPrimary
                  ? "bg-gradient-to-r from-[#C17B5C] to-[#B36A4D] text-white shadow-lg"
                  : "bg-white border-2 text-[#2C2420] shadow-md"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              style={{
                borderColor: !path.isPrimary ? path.color : "transparent",
              }}
            >
              {!path.isPrimary && (
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${path.color}15, ${path.color}08)`,
                  }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                {isSubmitting ? "Submitting..." : path.buttonText}
                {!isSubmitting && (
                  <motion.span
                    animate={{ x: isHovered ? 3 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.button>
          </form>
        ) : (
          <Link href={path.href}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full text-center py-3 sm:py-4 rounded-lg font-light tracking-wide transition-all duration-300 overflow-hidden ${
                path.isPrimary
                  ? "bg-gradient-to-r from-[#C17B5C] to-[#B36A4D] text-white shadow-lg"
                  : "bg-white border-2 text-[#2C2420] shadow-md"
              }`}
              style={{
                borderColor: !path.isPrimary ? path.color : "transparent",
              }}
            >
              {!path.isPrimary && (
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${path.color}15, ${path.color}08)`,
                  }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                {path.buttonText}
                <motion.span
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </motion.div>
          </Link>
        )}

        {/* Corner accent */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0.05,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute -bottom-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: path.color }}
        />
      </div>
    </motion.div>
  );
}
