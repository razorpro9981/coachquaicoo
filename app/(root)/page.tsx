"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(strength = 0.1) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1000], [0, 1000 * strength]);
}

export default function LuxuryHome() {
  const imageUrl = "/black_woman.jpg";

  const services = [
    {
      title: "Training",
      desc: "Tailored workshops and modules to develop skills, capability and confidence for individuals and teams.",
      href: "/training",
    },
    {
      title: "Coaching",
      desc: "Business & academic coaching to clarify goals, accelerate progress and embed sustainable change.",
      href: "/coaching",
    },
    {
      title: "Consultancy",
      desc: "Strategic and educational consultancy that guides decision-making and achieves measurable outcomes.",
      href: "/consultancy",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-(--bg-cream)">
      <Navbar />
      {/* /* HERO SECTION — CLEAN, EDITORIAL, IMAGE EMBEDDED IN BACKGROUND */}
      <header className="relative w-full h-screen overflow-hidden bg-[var(--bg-cream)]">
        {/* GRAIN TEXTURE */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none bg-[url('/grain.png')]"></div>

        {/* IMAGE RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            style={{ y: useParallax(0.12) }}
            className="absolute right-0 top-0 h-full w-[60%] md:w-[55%] lg:w-[50%] overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt="Dr Patricia Barnett-Quaicoo"
              fill
              priority
              className="object-cover object-top scale-100 animate-slowZoom"
            />

            {/* SOFT CREAM FADE TO LEFT */}
            <div className="absolute inset-0 bg-linear-to-l from-[rgba(247,239,232,0)] to-[var(--bg-cream)]"></div>
          </motion.div>
        </motion.div>

        {/* SUBTLE NAVY CIRCLE */}

        <div className="absolute left-[-220px] top-[-220px]  pointer-events-none z-20">
          <svg width="650" height="650" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="300" fill="rgba(207, 206, 254,0.15)" />
          </svg>
        </div>

        {/* TEXT CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-40 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            {/* OVERLINE */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.28em] text-xs text-[var(--text-dark)] opacity-70 mb-4"
            >
              Training • Coaching • Consultancy
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-[var(--text-heading)]"
            >
              Dr. Patricia Barnett-Quaicoo
            </motion.h1>

            {/* TERRACOTTA DIVIDER */}
            <div className="w-20 h-[3px] bg-[var(--accent-primary)] mt-5 mb-6"></div>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl font-light leading-relaxed text-[var(--text-dark)] max-w-xl"
            >
              Empowering leaders, parents and professionals to gain clarity,
              build confidence and achieve meaningful, sustainable growth in
              life and work.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              {/* PRIMARY CTA */}
              <Link
                href="/contact"
                className="bg-[var(--accent-primary)] text-white px-7 py-2 rounded-sm shadow-sm hover:opacity-90 transition font-semibold"
              >
                Book a Free Session
              </Link>

              {/* SECONDARY CTA */}
              {/* <Link
                href="/about"
                className="border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white px-7 py-3 rounded-lg transition font-medium"
              >
                Read My Story
              </Link> */}
            </motion.div>

            {/* QUICK FACTS */}
            <div className="mt-10 flex gap-10 flex-wrap">
              <div>
                <p className="text-sm uppercase tracking-wide text-[var(--accent-primary)] font-medium">
                  16+ years
                </p>
                <p className="text-sm text-[var(--text-dark)] opacity-75">
                  Banking & industry experience
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-[var(--accent-primary)] font-medium">
                  Higher Education
                </p>
                <p className="text-sm text-[var(--text-dark)] opacity-75">
                  Lecturer & course leader
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FADE */}
        {/* <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-[var(--bg-cream)]"></div> */}
      </header>

      {/* ========================================================= */}
      {/* ABOUT PREVIEW — Premium Editorial Section (All Enhancements) */}
      {/* ========================================================= */}

      <section className="relative w-full min-h-screen bg-(--bg-cream) py-32 overflow-hidden">
        {/* BACKGROUND LILAC SHAPE */}
        <div className="absolute right-[-200px] top-[150px] w-[500px] h-[500px] bg-[#E6DAF5]/50 blur-[2px] rounded-full opacity-40 pointer-events-none"></div>

        {/* FLOATING PARALLAX PORTRAIT */}
        {/* <motion.img
          src="/portrait2.png"
          alt="Floating portrait"
          className="hidden md:block absolute right-20 top-32 w-48 h-48 rounded-xl object-cover shadow-xl"
          style={{ y: useParallax(-0.15) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        /> */}

        {/* BACKGROUND LEFT MAIN IMAGE */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute left-0 top-0 h-full w-[45%] md:w-[50%] lg:w-[42%] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ y: useParallax(0.1) }}
          >
            <Image
              src="/blackw3.png"
              alt="Dr Patricia Barnett-Quaicoo"
              fill
              priority
              className="object-cover object-center"
            />

            {/* DIAGONAL FADE */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg-cream)]"></div>
          </motion.div>
        </div>

        {/* SOFT SCROLLING BACKGROUND QUOTE */}
        {/* <div className="absolute bottom-10 left-0 w-full opacity-[0.07] overflow-hidden pointer-events-none">
          <p className="whitespace-nowrap text-[120px] font-serif animate-scrollSlow">
            “You shortchange yourself if you don’t work at becoming your best.”
          </p>
        </div> */}

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center h-full">
          {/* TEXT BLOCK */}
          <div className="lg:col-start-2 relative z-10">
            {/* Heading */}
            <h2 className="text-[var(--text-heading)] text-3xl md:text-4xl font-serif font-bold leading-snug mb-6">
              Guiding People Toward <br />
              {/* BRUSHSTROKE UNDERLINE */}
              <span className="relative inline-block text-[var(--text-heading)]">
                Clarity, Confidence & Growth
                <svg
                  className="absolute left-0 -bottom-1 w-full h-4 text-[var(--accent-primary)] opacity-80"
                  viewBox="0 0 300 20"
                  fill="none"
                >
                  <path
                    d="M5 12 C85 3, 210 18, 295 10"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-[var(--text-dark)] max-w-xl mb-6">
              With a blend of academic expertise, leadership experience, and a
              passion for personal development, I help individuals, parents and
              professionals take meaningful steps toward clarity, direction and
              sustainable progress.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {[
                { title: "16+ YEARS", desc: "Banking & leadership experience" },
                {
                  title: "HIGHER EDUCATION",
                  desc: "Lecturer in UK institutions",
                },
                { title: "CONSULTANT", desc: "Educational & business" },
                { title: "QUALIFICATIONS", desc: "DBA, MBA, FHEA" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-[var(--accent-primary)] tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-sm text-[var(--text-heading)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Animated Signature */}
            <motion.p
              className="font-[Allura] text-4xl text-[var(--accent-primary)] mb-8 select-none"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Patricia
            </motion.p>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-block text-[var(--accent-primary)] font-medium hover:underline underline-offset-4"
            >
              Read My Story →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED IN — moved to its own section */}
      <section className="bg-[var(--bg-cream)] py-12 border-t border-[#EDE0CF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-sm text-[var(--muted)] tracking-wide mb-6">
            FEATURED IN
          </p>
          <div className="flex justify-center gap-12 opacity-70">
            <div className="h-8 w-24 bg-[#d8cfc0] rounded"></div>
            <div className="h-8 w-24 bg-[#d8cfc0] rounded"></div>
            <div className="h-8 w-24 bg-[#d8cfc0] rounded"></div>
          </div>
        </div>
      </section>

      {/* VIDEO — moved to its own section */}
      <section className="bg-[var(--bg-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
          <div className="w-full max-w-3xl aspect-video bg-black/10 border border-[#E0D4C4] rounded-2xl shadow-inner flex items-center justify-center text-[var(--muted)]">
            20-second intro video placeholder
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WHY WORK WITH ME — HIGHLIGHTS SECTION */}
      {/* ===================================================== */}
      <section className="bg-white py-24 border-t border-[#EDE0CF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold mb-12"
          >
            Why Work With Me
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "16+ Years Banking & Professional Experience",
              "Lecturer in UK Higher Education",
              "Educational & Business Consultant",
              "Author & Research Analyst",
              "DBA, MBA, FHEA Qualified",
              "Supporting Parents, Leaders & Professionals",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-[var(--bg-cream)] border border-[#EDE0CF] rounded-xl shadow-sm"
              >
                <p className="font-medium text-[var(--text-dark)]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* SERVICES SECTION (matches your previous) */}
      {/* ===================================================== */}
      <section className="bg-[var(--bg-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16"
          >
            Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-[#EDE0CF] shadow-sm p-8"
              >
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-[var(--muted)] mb-6">{s.desc}</p>
                <Link href={s.href}>
                  <div className="text-[var(--accent-sand)] font-medium hover:underline">
                    Learn more →
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TESTIMONIALS / QUOTES */}
      {/* ===================================================== */}
      <section className="bg-white py-24 border-t border-[#EDE0CF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold mb-12"
          >
            Words to Inspire
          </motion.h2>

          <div className="flex flex-col gap-12">
            {[
              "If you do pretend work, you get pretend results.",
              "You shortchange yourself if you do not work at becoming the best version of yourself.",
              "Do not unnecessarily push to tomorrow what you can achieve today.",
            ].map((quote, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl italic text-[var(--text-dark)] font-serif max-w-3xl mx-auto"
              >
                “{quote}”
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CTA SECTION */}
      {/* ===================================================== */}
      <section className="bg-[var(--accent-sand)] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to take the next step?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let’s work toward clarity, confidence and sustainable growth —
            together.
          </p>

          <Link href="/contact">
            <div className="inline-block bg-white text-[var(--accent-sand)] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#F7F3EE] transition">
              Book a Free Session
            </div>
          </Link>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}
      <footer className="bg-[var(--bg-cream)] border-t border-[#EDE0CF] py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-4 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Dr. Patricia Barnett-Quaicoo. All
            rights reserved.
          </div>
          <div className="flex justify-center gap-6 text-sm text-[var(--muted)]">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
