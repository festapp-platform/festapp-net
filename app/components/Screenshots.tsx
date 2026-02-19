"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

const TOTAL = 9;

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function Screenshots() {
  const { t } = useLang();
  const visible = useVisibleCount();
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragOffset = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = TOTAL - visible;

  // Clamp current index when visible count changes (e.g. resize)
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    dragOffset.current = 0;
    containerRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current;
      dragOffset.current = dx;
      // Prevent vertical scroll when swiping horizontally
      if (Math.abs(dx) > 10) {
        e.preventDefault();
      }
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 40;
    if (dragOffset.current < -threshold) {
      setCurrent((c) => Math.min(maxIndex, c + 1));
    } else if (dragOffset.current > threshold) {
      setCurrent((c) => Math.max(0, c - 1));
    }
  }, [isDragging, maxIndex]);

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
          {t.screenshots.title}
        </h2>

        <div className="relative">
          {/* Arrow left */}
          <button
            onClick={prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all ${
              current === 0 ? "opacity-30 cursor-default" : ""
            }`}
            aria-label="Previous"
            disabled={current === 0}
          >
            <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Draggable slider */}
          <div
            ref={containerRef}
            className="overflow-hidden mx-4 sm:mx-12 cursor-grab active:cursor-grabbing select-none touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${current * (100 / visible)}%)`,
              }}
            >
              {Array.from({ length: TOTAL }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-1 sm:px-2"
                  style={{ width: `${100 / visible}%` }}
                >
                  <Image
                    src={`/images/screenshots/${i + 1}.png`}
                    alt={`App screenshot ${i + 1}`}
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-xl pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow right */}
          <button
            onClick={next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all ${
              current === maxIndex ? "opacity-30 cursor-default" : ""
            }`}
            aria-label="Next"
            disabled={current === maxIndex}
          >
            <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === i ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
