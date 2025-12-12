"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Training",
    desc: "Tailored workshops and modules to develop skills, capability and confidence for individuals and teams.",
    href: "/training",
    number: "01",
    color: "#C17B5C",
    bgGradient: "from-[#FFFAF7] to-[#FFF8F3]",
  },
  {
    title: "Coaching",
    desc: "Business & academic coaching to clarify goals, accelerate progress and embed sustainable change.",
    href: "/coaching",
    number: "02",
    color: "#9B87C4",
    bgGradient: "from-[#FDFCFF] to-[#FAF8FF]",
  },
  {
    title: "Consultancy",
    desc: "Strategic and educational consultancy that guides decision-making and achieves measurable outcomes.",
    href: "/consultancy",
    number: "03",
    color: "#8FA699",
    bgGradient: "from-[#FBFCFC] to-[#F8FBFA]",
  },
];

export default function EnhancedServices() {

  return (
    <section className="relative bg-(--bg-cream) py-32 overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      {/* Colorful background accents */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#CFCEFE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#C17B5C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Elegant Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-[#C17B5C] font-medium uppercase mb-6">
              Signature Services
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2C2420] mb-4">
              How I Can Help
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C17B5C] via-[#9B87C4] to-[#8FA699] mx-auto mt-8"></div>
          </motion.div>
        </div>

        {/* Luxury Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <LuxuryServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LuxuryServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-pointer"
    >
      <div className="relative h-full">
        {/* Colored glow on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.4 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 blur-2xl rounded-lg translate-y-8"
          style={{ backgroundColor: service.color }}
        />

        {/* Main Card with gradient background */}
        <div
          className={`relative h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-md border-2 border-white/60 rounded-sm p-12 transition-all duration-700 overflow-hidden shadow-lg`}
        >
          {/* Colored hover overlay */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.03 : 0,
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{ backgroundColor: service.color }}
          />

          {/* Decorative colored element top right */}
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.06 : 0.04,
            }}
            transition={{ duration: 0.6 }}
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-2xl"
            style={{ backgroundColor: service.color }}
          />

          {/* Number - With color accent */}
          <div className="relative mb-12">
            <motion.p
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="text-8xl font-serif font-extralight leading-none"
              style={{
                color: service.color,
                opacity: 0.15,
                transform: "translateZ(10px)",
              }}
            >
              {service.number}
            </motion.p>
          </div>

          {/* Title */}
          <h3
            className="text-3xl font-serif font-light mb-6 text-[#2C2420] tracking-tight"
            style={{ transform: "translateZ(20px)" }}
          >
            {service.title}
          </h3>

          {/* Colored divider */}
          <motion.div
            animate={{
              width: isHovered ? "60px" : "40px",
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] mb-8"
            style={{
              backgroundColor: service.color,
              transform: "translateZ(20px)",
            }}
          />

          {/* Description */}
          <p
            className="text-[#5C5349] leading-relaxed mb-10 font-light text-[15px]"
            style={{ transform: "translateZ(15px)" }}
          >
            {service.desc}
          </p>

          {/* Elegant CTA with color */}
          <motion.div
            animate={{
              x: isHovered ? 3 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 font-light text-sm tracking-wide"
            style={{
              color: service.color,
              transform: "translateZ(25px)",
            }}
          >
            <span>Discover More</span>
            <motion.span
              animate={{
                x: isHovered ? 4 : 0,
                opacity: isHovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.4 }}
              className="text-base"
            >
              →
            </motion.span>
          </motion.div>

          {/* Corner accent with color */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.08 : 0.04,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full blur-3xl"
            style={{ backgroundColor: service.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}
