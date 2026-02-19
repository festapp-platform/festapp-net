"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t, lang, toggleLang } = useLang();

  return (
    <footer className="bg-[#1a1a2e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Festapp"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-white/60 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.menu}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-white transition-colors">
                  {t.nav.screenshots}
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <button
                  onClick={toggleLang}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.langSwitch}
                </button>
              </li>
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.usefulLinks}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="https://raw.githack.com/vkh-cr/festapp/prod/festapp/PrivacyPolicy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.privacyPolicy}
                </a>
              </li>
              <li>
                <a
                  href="https://live.festapp.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.startApp}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vkh-cr/festapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.github}
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.download}</h4>
            <div className="flex flex-col gap-3">
              {/* Google Play badge */}
              <a
                href="https://play.google.com/store/apps/details?id=fstapp.slunovratopava"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white/60 rounded-lg px-4 py-2.5 transition-colors group"
              >
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.764-2.302 2.764-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="leading-tight">
                  <div className="text-[10px] text-white/60 uppercase tracking-wide">{lang === "cs" ? "Dostupné na" : "Available on"}</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
              {/* App Store badge */}
              <a
                href="https://apps.apple.com/us/app/festapp/id6474078383"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white/60 rounded-lg px-4 py-2.5 transition-colors group"
              >
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="leading-tight">
                  <div className="text-[10px] text-white/60 uppercase tracking-wide">{lang === "cs" ? "Stáhnout na" : "Download on"}</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          © 2026 Festapp
        </div>
      </div>
    </footer>
  );
}
