"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-4">
          {t.howItWorks.title}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t.howItWorks.subtitle}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/how-it-works.png"
              alt="How Festapp works"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-8">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
