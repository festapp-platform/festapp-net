"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.screenshots, href: "#screenshots" },
    { label: t.nav.faq, href: "#support" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#">
            <Image
              src={scrolled ? "/images/logo-alt.png" : "/images/logo.png"}
              alt="Festapp"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-primary hover:text-primary-dark"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t.nav.langSwitch}
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — fullscreen overlay */}
      {menuOpen && (
        <div className={`md:hidden fixed inset-0 top-16 flex flex-col items-center justify-center gap-6 ${
          scrolled
            ? "bg-white"
            : "bg-[#4465A6]"
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xl font-medium ${
                scrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLang();
              setMenuOpen(false);
            }}
            className={`text-xl font-medium ${
              scrolled
                ? "text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.langSwitch}
          </button>
        </div>
      )}
    </nav>
  );
}
