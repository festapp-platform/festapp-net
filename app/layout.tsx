import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Festapp | Festival. Conference. Event.",
  description:
    "Elevate your event experience with Festapp: Custom branded mobile app for both participants and organizers. Runs on Web, Android and iOS. Try it now!",
  keywords: "festapp,conference,app,mobile,festival",
  openGraph: {
    title: "Festapp | Festival. Conference. Event.",
    description:
      "Elevate your event experience with Festapp: Custom branded mobile app for both participants and organizers. Runs on Web, Android and iOS. Try it now!",
    url: "https://festapp.net",
    siteName: "Festapp",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://festapp.net/wp-content/uploads/2024/02/66shots_so-e1709005773199.png",
        width: 1200,
        height: 630,
        alt: "Festapp - Mobile app for festivals, events & conferences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festapp | Festival. Conference. Event.",
    description:
      "Elevate your event experience with Festapp: Custom branded mobile app for both participants and organizers.",
  },
  alternates: {
    canonical: "https://festapp.net",
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
