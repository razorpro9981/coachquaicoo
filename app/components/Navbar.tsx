"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F1E8]/90 backdrop-blur-xl shadow-sm border-b border-[#E6DCCE]/50"
          : "bg-[#F7EFE8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-15">
          {/* LOGO - Enhanced */}
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <span className="text-xl md:text-2xl font-serif tracking-tight font-light text-[#2B3A67]">
                Dr.{" "}
                <span className="font-normal bg-gradient-to-r from-[#9B6B5C] to-[#B8B5D4] bg-clip-text text-transparent">
                  Barnett-Quaicoo
                </span>
              </span>

              {/* Subtle underline on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#9B6B5C] to-[#B8B5D4]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV - Enhanced */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <span
                      className={`text-sm uppercase tracking-[0.15em] font-light transition-all duration-300 
                        ${
                          isActive
                            ? "text-[#9B6B5C]"
                            : "text-[#5C5349] hover:text-[#9B6B5C]"
                        }
                      `}
                    >
                      {link.name}
                    </span>

                    {/* Animated underline */}
                    <motion.div
                      className="absolute left-0 -bottom-1 h-[1px] bg-[#9B6B5C]"
                      initial={{ width: "0%" }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    {/* Subtle dot indicator for active */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9B6B5C]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}

            {/* CTA Button - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative ml-4 bg-[#8b3d2f] text-white font-light px-5 py-1.5 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#B8B5D4] to-[#2B3A67]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative z-10 tracking-wide">
                    Book Session
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* MOBILE MENU BUTTON - Enhanced */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="text-[#2B3A67] p-2 rounded-lg hover:bg-[#9B6B5C]/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - Enhanced */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#F5F1E8]/95 backdrop-blur-xl border-t border-[#E6DCCE]/50 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block group"
                    >
                      <div className="flex items-center justify-between py-2">
                        <span
                          className={`text-base uppercase tracking-[0.15em] font-light transition-colors duration-300 
                            ${
                              isActive
                                ? "text-[#9B6B5C]"
                                : "text-[#5C5349] group-hover:text-[#9B6B5C]"
                            }
                          `}
                        >
                          {link.name}
                        </span>

                        {isActive && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="w-2 h-2 rounded-full bg-[#9B6B5C]"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>

                      {/* Divider */}
                      <motion.div
                        className="h-[1px] bg-gradient-to-r from-[#E6DCCE] to-transparent mt-2"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link href="/book">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(false)}
                    className="w-full bg-gradient-to-r from-[#9B6B5C] to-[#B8B5D4] text-white font-light px-8 py-3 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="tracking-wide">Book Session</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
