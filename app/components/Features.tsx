"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

// Linea icon mapping: [fontClass, character]
const featureIcons: [string, string][] = [
  ["basic", "!"],        // lock-open (Reach all platforms)
  ["basic", "\u{e005}"], // settings (Workshops)
  ["basic", "."],        // message-txt (Notifications)
  ["basic", "R"],        // geolocalize-05 (Map)
  ["basic", "\u{e00a}"], // sheet-pencil (Administration)
  ["elaboration", "}"],  // mail-download (Offline Accessibility)
  ["basic", "b"],        // alarm (Personalized Schedule)
  ["basic", "9"],        // lock (Fast, safe and open source)
];

function LineaIcon({ index, className }: { index: number; className?: string }) {
  const [fontClass, char] = featureIcons[index];
  return (
    <span className={`linea-icon ${fontClass} ${className ?? ""}`}>
      {char}
    </span>
  );
}

export default function Features() {
  const { t, lang } = useLang();
  const heading = lang === "cs" ? "Funkce" : "Features";

  const leftFeatures = t.features.items.slice(0, 4);
  const rightFeatures = t.features.items.slice(4, 8);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 3-column layout (left features | phone | right features) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Left features — text right-aligned, icon on right */}
          <div className="space-y-14">
            {leftFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-5 flex-row-reverse">
                <div className="flex-shrink-0">
                  <LineaIcon index={i} className="text-[42px] text-primary" />
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center phone image */}
          <div className="flex justify-center px-6">
            <Image
              src="/images/features.png"
              alt="Festapp features"
              width={500}
              height={700}
              className="w-[420px] h-auto"
            />
          </div>

          {/* Right features — icon on left, text left-aligned */}
          <div className="space-y-14">
            {rightFeatures.map((feature, i) => {
              const isLast = i + 4 === 7;
              return (
                <div key={i + 4} className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <LineaIcon index={i + 4} className="text-[42px] text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isLast ? (
                        <a
                          href="https://github.com/vkh-cr/festapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          {feature.title}
                        </a>
                      ) : (
                        feature.title
                      )}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: stacked layout */}
        <div className="lg:hidden">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-8">
            {heading}
          </h2>
          <div className="flex justify-center mb-12">
            <Image
              src="/images/features.png"
              alt="Festapp features"
              width={500}
              height={700}
              className="w-full max-w-xs h-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.features.items.map((feature, i) => {
              const isLast = i === 7;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <LineaIcon index={i} className="text-[36px] text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {isLast ? (
                        <a
                          href="https://github.com/vkh-cr/festapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          {feature.title}
                        </a>
                      ) : (
                        feature.title
                      )}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
