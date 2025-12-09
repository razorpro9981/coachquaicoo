"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-cream)]/70 backdrop-blur-lg border-b border-[#e6dacb]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-serif tracking-tight font-semibold text-[var(--text-heading)]"
          >
            Dr.{" "}
            <span className="text-[var(--accent-primary)]">
              Barnett-Quaicoo
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`relative text-sm uppercase tracking-wide font-medium transition-all cursor-pointer 
                      ${
                        isActive
                          ? "text-[var(--text-heading)]"
                          : "text-[#6F6F6F] hover:text-[var(--text-heading)]"
                      }
                    `}
                  >
                    {link.name}

                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--accent-primary)] transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </span>
                </Link>
              );
            })}

            {/* CTA */}
            <Link href="/book">
              <button className="ml-6 bg-[var(--accent-primary)] text-white font-medium px-5 py-1.5 rounded-sm shadow-sm hover:opacity-90 transition">
                Book Session
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-[var(--text-heading)] p-2"
            >
              {open ? (
                <svg
                  className="w-7 h-7"
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
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
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
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[var(--bg-cream)]/95 border-t border-[#e2d7c9] transition-all duration-300 
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[var(--text-heading)] uppercase tracking-wide text-sm py-2 hover:text-[var(--accent-primary)]"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/book">
            <button 
                className="bg-[var(--accent-primary)] text-white px-7 py-2 rounded-sm shadow-sm hover:opacity-90 transition font-semibold">
              Book Session
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
