"use client";

import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLang();

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
          {t.faq.title}
        </h2>
        <div className="space-y-4">
          {t.faq.items.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between font-medium text-primary-dark hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">
          {t.faq.stillQuestion}{" "}
          <a href="#contact" className="text-primary hover:underline">
            {t.faq.askHere}
          </a>
        </p>
      </div>
    </section>
  );
}
