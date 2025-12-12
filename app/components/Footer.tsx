"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EnhancedFooter() {
  const footerLinks = {
    services: [
      { label: "Training", href: "/training" },
      { label: "Coaching", href: "/coaching" },
      { label: "Consultancy", href: "/consultancy" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Resources", href: "/resources" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M6.5 6.5h11v11h-11z M17.5 2.5h-11a4 4 0 00-4 4v11a4 4 0 004 4h11a4 4 0 004-4v-11a4 4 0 00-4-4z",
    },
  ];

  return (
    <footer className="relative bg-[#F7EFE8] border-t border-[#E8DCCE]/50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#CFCEFE]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C17B5C]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Takes more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-3xl font-serif font-light text-[#2C2420] mb-4">
              Dr. Patricia
              <br />
              Barnett-Quaicoo
            </h3>

            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C17B5C] to-transparent mb-6" />

            <p className="text-[#5C5349] font-light leading-relaxed mb-6 max-w-md">
              Empowering leaders, parents and professionals to gain clarity,
              build confidence and achieve meaningful, sustainable growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-[#7A6F60]">
              <a
                href="mailto:info@patriciabarnet.com"
                className="flex items-center gap-2 hover:text-[#C17B5C] transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-light">info@patriciabarnet.com</span>
              </a>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-light">London, United Kingdom</span>
              </div>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-medium tracking-wide text-[#C17B5C] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#5C5349] hover:text-[#C17B5C] transition-colors duration-300 font-light text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-medium tracking-wide text-[#9B87C4] uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#5C5349] hover:text-[#9B87C4] transition-colors duration-300 font-light text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="text-sm font-medium tracking-wide text-[#8FA699] uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#5C5349] hover:text-[#8FA699] transition-colors duration-300 font-light text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#E8DCCE] to-transparent mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-[#7A6F60] font-light">
            © {new Date().getFullYear()} Dr. Patricia Barnett-Quaicoo. All
            rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-[#E8DCCE] flex items-center justify-center text-[#7A6F60] hover:text-[#C17B5C] hover:border-[#C17B5C]/40 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Signature touch */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="font-['Allura'] text-2xl text-[#C17B5C]/30 select-none">
            Patricia
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
