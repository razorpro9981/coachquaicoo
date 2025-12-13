"use client";

import { motion } from "framer-motion";

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

      {/* Colorful background accents - Optimized */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#CFCEFE]/15 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#C17B5C]/10 rounded-full blur-xl pointer-events-none" />

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
      className="group cursor-pointer"
    >
      <div className="relative h-full">
        {/* Main Card with gradient background - Optimized */}
        <div
          className={`relative h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-md border-2 border-white/60 rounded-sm p-12 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl`}
        >
          {/* Colored hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-600"
            style={{ backgroundColor: service.color }}
          />

          {/* Decorative colored element top right */}
          <div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-xl opacity-[0.04] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-600"
            style={{ backgroundColor: service.color }}
          />

          {/* Number - With color accent */}
          <div className="relative mb-12">
            <p
              className="text-8xl font-serif font-extralight leading-none group-hover:-translate-y-0.5 transition-transform duration-400"
              style={{
                color: service.color,
                opacity: 0.15,
              }}
            >
              {service.number}
            </p>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-serif font-light mb-6 text-[#2C2420] tracking-tight">
            {service.title}
          </h3>

          {/* Colored divider */}
          <div
            className="h-[2px] w-10 mb-8 group-hover:w-[60px] transition-all duration-500"
            style={{ backgroundColor: service.color }}
          />

          {/* Description */}
          <p className="text-[#5C5349] leading-relaxed mb-10 font-light text-[15px]">
            {service.desc}
          </p>

          {/* Elegant CTA with color */}
          <div
            className="inline-flex items-center gap-3 font-light text-sm tracking-wide group-hover:translate-x-1 transition-transform duration-400"
            style={{ color: service.color }}
          >
            <span>Discover More</span>
            <span className="text-base opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-400">
              →
            </span>
          </div>

          {/* Corner accent with color */}
          <div
            className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full blur-xl opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-600"
            style={{ backgroundColor: service.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}
