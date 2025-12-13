"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer three core services: Training workshops and modules to develop skills and capabilities, one-on-one Coaching for business and academic goals, and strategic Consultancy for educational and business decision-making. Each service is tailored to your unique needs and objectives.",
      color: "#C17B5C",
    },
    {
      question: "How long does a typical coaching engagement last?",
      answer:
        "Coaching engagements are flexible and depend on your goals. Most clients find value in a 3-6 month commitment with bi-weekly sessions, but we can customize the duration and frequency based on what works best for you. The free consultation will help us determine the ideal structure.",
      color: "#9B87C4",
    },
    {
      question: "What is your background and experience?",
      answer:
        "I bring over 16 years of banking and industry leadership experience, combined with extensive academic expertise as a lecturer and course leader in UK higher education institutions. I hold a DBA, MBA, and FHEA qualification, giving me both practical business insight and educational rigor.",
      color: "#8FA699",
    },
    {
      question: "Who do you typically work with?",
      answer:
        "I work with leaders, parents, and professionals who are committed to personal and professional growth. My clients range from corporate executives seeking leadership development to parents balancing career and family, to professionals navigating career transitions or seeking clarity in their direction.",
      color: "#C17B5C",
    },
    {
      question: "What can I expect from the free consultation?",
      answer:
        "The complimentary 30-minute session is a no-pressure conversation where we'll discuss your current challenges, goals, and aspirations. I'll share how my approach might help you, and we'll determine if working together is a good fit. There's no obligation to proceed after the consultation.",
      color: "#9B87C4",
    },
    {
      question: "Do you offer virtual or in-person sessions?",
      answer:
        "I offer both virtual and in-person sessions to accommodate different preferences and locations. Virtual sessions are conducted via secure video conferencing platforms, making it easy to work together regardless of your location. In-person options are available in London and surrounding areas.",
      color: "#8FA699",
    },
  ];

  return (
    <section className="relative bg-[#f5f1e8] py-20 md:py-32 overflow-hidden border-t border-[#EDE0CF]/50">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#CFCEFE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#C17B5C]/6 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C17B5C]" />
              <span className="text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#7A6F60] font-medium uppercase">
                Common Questions
              </span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C17B5C]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#2C2420] mb-6"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-[#5C5349] max-w-2xl mx-auto leading-relaxed font-light"
          >
            Everything you need to know about working together. Can&apos;t find the
            answer you&apos;re looking for? Feel free to reach out.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-[#C17B5C] via-[#9B87C4] to-[#8FA699] mx-auto mt-8"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-[#7A6F60] font-light mb-6">
            Still have questions? I&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#C17B5C] font-light hover:gap-3 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FAQItem({ faq, index }: { faq: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative bg-white/60 backdrop-blur-sm border-2 border-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden">
        {/* Subtle gradient overlay */}
        <motion.div
          animate={{
            opacity: isOpen ? 0.04 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          style={{ backgroundColor: faq.color }}
        />

        {/* Question Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full text-left px-6 sm:px-8 py-6 sm:py-7 flex items-start justify-between gap-4 group"
        >
          <div className="flex-1">
            {/* Colored accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40px" }}
              animate={{ width: isOpen ? "60px" : "40px" }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="h-[2px] mb-4"
              style={{ backgroundColor: faq.color }}
            />

            <h3 className="text-lg sm:text-xl font-serif font-light text-[#2C2420] leading-relaxed pr-4">
              {faq.question}
            </h3>
          </div>

          {/* Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{
              backgroundColor: isOpen ? `${faq.color}15` : `${faq.color}08`,
            }}
          >
            {isOpen ? (
              <Minus
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: faq.color }}
              />
            ) : (
              <Plus
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: faq.color }}
              />
            )}
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="relative px-6 sm:px-8 pb-6 sm:pb-7">
                <p className="text-sm sm:text-base text-[#5C5349] font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom corner accent */}
        <motion.div
          animate={{
            opacity: isOpen ? 0.08 : 0.04,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: faq.color }}
        />
      </div>
    </motion.div>
  );
}
