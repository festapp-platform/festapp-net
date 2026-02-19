"use client";

import Image from "next/image";
import { useLang } from "../i18n/LanguageContext";
import {
  IconWhatsApp,
  IconGitHub,
  IconFacebook,
  IconX,
  IconLinkedIn,
  IconInstagram,
  IconGlobe,
} from "./Icons";
import { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  WhatsApp: IconWhatsApp,
  GitHub: IconGitHub,
  Facebook: IconFacebook,
  X: IconX,
  LinkedIn: IconLinkedIn,
  Instagram: IconInstagram,
  Web: IconGlobe,
};

const team = [
  {
    name: "Michael Bujnovský",
    role: "Lead",
    image: "/images/team/michael.jpg",
    socials: [
      { label: "WhatsApp", href: "https://wa.me/42073140198" },
      { label: "GitHub", href: "https://github.com/miakh" },
      {
        label: "Facebook",
        href: "https://www.facebook.com/michael.bujnovsky/",
      },
    ],
  },
  {
    name: "Jan Roháč",
    role: "Sales",
    image: "/images/team/jan.jpg",
    socials: [{ label: "WhatsApp", href: "https://wa.me/420722423195" }],
  },
  {
    name: "František Bujnovský",
    role: "Development",
    image: "/images/team/frantisek.jpg",
    socials: [
      { label: "WhatsApp", href: "https://wa.me/420731646364" },
      { label: "X", href: "https://x.com/ferobujnovsky" },
      {
        label: "LinkedIn",
        href: "http://www.linkedin.com/in/bujnovskyf",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/bujnovskyf/",
      },
      { label: "Web", href: "https://frantisekbujnovsky.com/" },
    ],
  },
];

export default function Team() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          {t.team.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-72 h-72 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 text-lg mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                {member.socials.map((social) => {
                  const Icon = iconMap[social.label];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-primary transition-colors"
                      title={social.label}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
