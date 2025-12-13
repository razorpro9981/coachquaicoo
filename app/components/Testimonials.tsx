"use client";

import { motion } from "framer-motion";

export default function EnhancedQuotesSection() {
  const quotes = [
    {
      text: "If you do pretend work, you get pretend results.",
      color: "#C17B5C",
    },
    {
      text: "You shortchange yourself if you do not work at becoming the best version of yourself.",
      color: "#9B87C4",
    },
    {
      text: "Do not unnecessarily push to tomorrow what you can achieve today.",
      color: "#8FA699",
    },
  ];

  return (
    <section className="relative bg-[#F7EFE8] py-24 border-t border-[#EDE0CF]/50 overflow-hidden">
      {/* Decorative background elements - Optimized */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#C17B5C]/5 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#CFCEFE]/8 rounded-full blur-xl pointer-events-none" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C17B5C]" />
              <span className="text-xs tracking-[0.3em] text-[#7A6F60] font-medium uppercase">
                Philosophy
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C17B5C]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-light text-[#2C2420] mb-4"
          >
            Words to Inspire
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-[#C17B5C] via-[#9B87C4] to-[#8FA699] mx-auto"
          />
        </div>

        {/* Quotes Grid - Three columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, i) => (
            <QuoteCard key={i} quote={quote} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ quote, index }: { quote: { text: string; color: string }; index: number }) {
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
      className="group relative"
    >
      <div className="relative h-full">
        {/* Quote Card - Optimized */}
        <div className="relative h-full bg-white/50 backdrop-blur-sm border-2 border-white/80 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col">
          {/* Subtle gradient overlay on hover */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500"
            style={{ backgroundColor: quote.color }}
          />

          {/* Decorative number */}
          <div
            className="absolute top-4 right-4 text-6xl font-serif font-light leading-none select-none pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-500"
            style={{ color: quote.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Opening quote mark */}
          <div
            className="text-6xl font-serif leading-none mb-4 select-none opacity-30 group-hover:opacity-100 transition-opacity duration-400"
            style={{ color: quote.color }}
          >
            &quot;
          </div>

          {/* Quote text */}
          <blockquote className="relative flex-1 text-lg md:text-xl font-serif font-light leading-relaxed text-[#2C2420] mb-6">
            {quote.text}
          </blockquote>

          {/* Decorative accent line */}
          <div
            className="h-[2px] w-10 group-hover:w-[60px] transition-all duration-800"
            style={{ backgroundColor: quote.color }}
          />

          {/* Subtle corner accent */}
          <div
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-600"
            style={{ backgroundColor: quote.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}
