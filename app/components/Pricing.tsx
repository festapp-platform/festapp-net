"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

export default function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-2">
          {t.pricing.title}
        </h2>
        <p className="text-center text-gray-600 mb-8">{t.pricing.subtitle}</p>

        {/* Device mockup above pricing cards like original */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/devices.png"
            alt="Festapp on devices"
            width={500}
            height={300}
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {t.pricing.plans.map((plan, idx) => {
            const isPopular = idx === 1;
            return (
              <div
                key={idx}
                className={`p-8 bg-white flex flex-col ${
                  isPopular
                    ? "border-2 border-primary relative md:z-10 md:shadow-lg"
                    : "border border-gray-200"
                }`}
              >
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary-dark">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-gray-500">
                        {" "}
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-dark">
                    {plan.name}
                  </h3>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary"
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center py-3 rounded-full font-semibold transition-all bg-[#4465A6] text-white hover:bg-[#253759]"
                >
                  {t.pricing.purchase}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
