"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

const words = {
  en: ["Festival.", "Event.", "Conference."],
  cs: ["Festival.", "Setkání.", "Konference."],
};

export default function Hero() {
  const { t, lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % 3);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentWords = words[lang];
  const parallaxSlow = scrollY * 0.3;
  const parallaxMed = scrollY * 0.15;

  return (
    <section ref={sectionRef} className="relative pt-28 pb-56 md:pb-64 overflow-hidden min-h-[700px]">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(-47deg, #80BDF2 0%, #4465A6 100%)",
        }}
      />
      {/* Subtle geometric low-poly texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geo" width="500" height="400" patternUnits="userSpaceOnUse">
            <polygon points="0,0 85,30 30,75" fill="white" opacity="0.8" />
            <polygon points="85,30 200,0 160,65" fill="white" opacity="0.4" />
            <polygon points="200,0 310,25 250,90" fill="white" opacity="0.7" />
            <polygon points="310,25 420,0 380,70" fill="white" opacity="0.3" />
            <polygon points="420,0 500,0 500,55 440,80" fill="white" opacity="0.6" />
            <polygon points="30,75 160,65 120,150 50,130" fill="white" opacity="0.5" />
            <polygon points="160,65 250,90 210,160" fill="white" opacity="0.9" />
            <polygon points="250,90 380,70 350,160 280,140" fill="white" opacity="0.35" />
            <polygon points="380,70 500,55 470,150" fill="white" opacity="0.7" />
            <polygon points="0,130 50,130 80,200 0,220" fill="white" opacity="0.45" />
            <polygon points="50,130 120,150 140,230 80,200" fill="white" opacity="0.6" />
            <polygon points="120,150 210,160 190,240" fill="white" opacity="0.3" />
            <polygon points="210,160 350,160 310,240 230,220" fill="white" opacity="0.8" />
            <polygon points="350,160 470,150 500,230 400,250" fill="white" opacity="0.5" />
            <polygon points="0,220 80,200 60,290 0,310" fill="white" opacity="0.7" />
            <polygon points="80,200 190,240 150,320 60,290" fill="white" opacity="0.4" />
            <polygon points="190,240 310,240 270,330" fill="white" opacity="0.6" />
            <polygon points="310,240 400,250 430,330 340,350" fill="white" opacity="0.3" />
            <polygon points="400,250 500,230 500,340 430,330" fill="white" opacity="0.55" />
            <polygon points="0,310 60,290 40,400 0,400" fill="white" opacity="0.5" />
            <polygon points="60,290 150,320 130,400 40,400" fill="white" opacity="0.8" />
            <polygon points="150,320 270,330 240,400 130,400" fill="white" opacity="0.35" />
            <polygon points="270,330 430,330 390,400 240,400" fill="white" opacity="0.65" />
            <polygon points="430,330 500,340 500,400 390,400" fill="white" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>

      {/* Content — parallax foreground */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ transform: `translateY(${-parallaxMed * 0.3}px)` }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
          <div className="flex-1 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {currentWords.map((word, i) => (
                <span
                  key={`${lang}-${i}`}
                  className={`block transition-all duration-400 ${
                    i === activeIndex
                      ? fade
                        ? "opacity-100 translate-y-0"
                        : "opacity-40 translate-y-1"
                      : "opacity-70"
                  }`}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              {t.hero.subtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="http://live.festapp.net"
                className="border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-sm text-base hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                {t.hero.tryNow}
              </a>
              <a
                href="#contact"
                className="border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-sm text-base hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                {t.hero.contactUs}
              </a>
            </div>
          </div>
          {/* Floating/bobbing hero image — bigger */}
          <div className="flex-1 hero-float md:-mr-8 lg:-mr-16">
            <Image
              src="/images/hero.png"
              alt="Festapp mobile app"
              width={700}
              height={580}
              className="w-full h-auto max-w-[700px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Layered animated waves — only at the bottom */}
      <div className="hero-wave" style={{ height: "300px" }}>
        {/* Back wave — slowest, most transparent */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "300px", transform: `translateY(${-parallaxSlow * 0.1}px)` }}
        >
          <path fill="white">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160 C180,220 360,70 540,140 C720,210 900,50 1080,120 C1200,170 1350,80 1440,140 L1440,300 L0,300 Z;
                M0,100 C180,50 360,200 540,120 C720,50 900,210 1080,140 C1200,80 1350,190 1440,100 L1440,300 L0,300 Z;
                M0,160 C180,220 360,70 540,140 C720,210 900,50 1080,120 C1200,170 1350,80 1440,140 L1440,300 L0,300 Z
              "
            />
          </path>
        </svg>

        {/* Middle wave */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-40"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "240px" }}
        >
          <path fill="white">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,140 C240,200 480,50 720,140 C960,230 1200,50 1440,140 L1440,300 L0,300 Z;
                M0,100 C240,40 480,220 720,100 C960,10 1200,200 1440,100 L1440,300 L0,300 Z;
                M0,140 C240,200 480,50 720,140 C960,230 1200,50 1440,140 L1440,300 L0,300 Z
              "
            />
          </path>
        </svg>

        {/* Front wave — solid white */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          style={{ height: "190px" }}
        >
          <path fill="white">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,110 C240,170 480,40 720,110 C960,180 1200,40 1440,110 L1440,240 L0,240 Z;
                M0,80 C240,20 480,170 720,80 C960,0 1200,170 1440,80 L1440,240 L0,240 Z;
                M0,110 C240,170 480,40 720,110 C960,180 1200,40 1440,110 L1440,240 L0,240 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
