"use client";

import { useLang } from "../i18n/LanguageContext";
import { IconMapPin, IconPhone, IconMail } from "./Icons";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary-dark mb-12">
          {t.contact.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-center mb-3">
              <IconMapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-primary-dark mb-1">
              {t.contact.location}
            </h3>
            <p className="text-gray-600">{t.contact.address}</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <IconPhone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-primary-dark mb-1">
              {t.contact.phone}
            </h3>
            <a
              href="tel:+420792759379"
              className="text-primary hover:underline"
            >
              +420 792 759 379
            </a>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <IconMail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-primary-dark mb-1">
              {t.contact.email}
            </h3>
            <a
              href="mailto:info@festapp.net"
              className="text-primary hover:underline"
            >
              info@festapp.net
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
