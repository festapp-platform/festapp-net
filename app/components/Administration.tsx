"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

export default function Administration() {
  const { t } = useLang();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
          {t.admin.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4">
            {t.admin.features.map((feature, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-[#4465A6] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#253759] transition-all"
              >
                {t.admin.cta}
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/admin.png"
              alt="Festapp administration"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
