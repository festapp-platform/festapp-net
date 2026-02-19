export type Lang = "en" | "cs";

export const translations = {
  en: {
    nav: {
      features: "Features",
      screenshots: "Screenshots",
      faq: "FAQ",
      pricing: "Pricing",
      contact: "Contact",
      langSwitch: "Čeština",
    },
    hero: {
      title: "Festival. Event. Conference.",
      subtitle: "Mobile app for both participants and organizers.",
      tryNow: "Try now",
      contactUs: "Contact us",
    },
    features: {
      items: [
        {
          title: "Reach all platforms",
          description:
            "Whether you're using an iPhone, Android device, or browsing from your computer, Festapp ensures consistent access.",
        },
        {
          title: "Workshops",
          description:
            "Within the Festapp you can create workshops and lectures with limited capacity. Each session includes a number of available slots. Attendees can reserve their spot by clicking the 'Sign Up' button.",
        },
        {
          title: "Notifications",
          description:
            "Send and receive updates about schedule changes, special announcements, or exclusive offers. Festapp ensures you don't miss out on anything important.",
        },
        {
          title: "Map",
          description:
            "Navigating large venues can be challenging. With Festapp, you get interactive maps that guide you to different stages, booths, or activity areas. No more getting lost in the crowd!",
        },
        {
          title: "Administration",
          description:
            "Event organizers can access a secure dashboard within Festapp. From here, they can manage event schedules, update session details, and fine-tune notifications.",
        },
        {
          title: "Offline Accessibility",
          description:
            "Whether you're in a crowded festival area with spotty network coverage or attending a conference in a basement, you can still access your event schedule, maps, and essential information.",
        },
        {
          title: "Personalized Schedule",
          description:
            "Festapp allows attendees to create customized event schedules tailored to their preferences, ensuring they never miss a moment during the event.",
        },
        {
          title: "Fast, safe and open source",
          description:
            "Festapp combines cutting-edge technologies, robust security measures, and an open-source approach to provide a fast, safe, and collaborative event experience.",
        },
      ],
    },
    screenshots: {
      title: "App Screenshots",
    },
    howItWorks: {
      title: "How does it work?",
      subtitle:
        "After contacting us, you will receive a detailed DEMO of the application. If you decide to proceed, we will agree on specific app details, and the creation of the application can begin.",
      steps: [
        {
          title: "Custom branding",
          description: "Specify your logo, font, colors, even custom icons.",
        },
        {
          title: "Publishing",
          description:
            "Your app with all the customization and datastore will be packed and published on the stores.",
        },
        {
          title: "Delivery",
          description:
            "We will send you links to published apps with administrator access.",
        },
      ],
    },
    admin: {
      title: "Administration",
      features: [
        "In the event datagrid, you can add all what will be happening on your event. You can also create workshop with limited participants.",
        "It is possible to add all places with individual icons to the map.",
        "Fill with all information including clickable phone numbers.",
        "Add or import people.",
        "Now you can also create news and send push notifications.",
        "With feature groups you can connect people into their own meeting.",
      ],
      cta: "Try it for yourself",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question:
            "What's the difference between native app and web app?",
          answer:
            "Both versions can be installed on a phone and have the app as an icon. The main practical difference is that the native app is published in the Appstore and Play Store. The native app also has higher performance (smoother animations).",
        },
        {
          question: "Does the application run on Windows?",
          answer:
            "Web version of application is accessible from all widely used browsers, so yes – you can access it also from system Windows.",
        },
        {
          question: "How do I get users in?",
          answer:
            "Part of the app is import process where you can insert CSV table with users data. Other option is to let users sign in by themselves by registration.",
        },
        {
          question: "Does it speak my language?",
          answer:
            "As of now you the app supports german, polish, czech, slovak and ukrainan. Other languages are on the way.",
        },
        {
          question:
            "In one workshop I need 50% men and 50% women. Is it possible with Festapp?",
          answer:
            'Yes, it is possible to set it inside administration in events tab. You need to limit workshop for a certain capacity and then turn on option 50/50.',
        },
      ],
      stillQuestion: "Still have a question?",
      askHere: "Ask your question here",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Yearly subscription",
      purchase: "Purchase",
      plans: [
        {
          name: "Minimal",
          price: "€499",
          period: "/ year",
          features: [
            "Brand customizations",
            "Web app",
            "Native Android app",
            "Native iOS app",
            "Administration access",
            "Offline access",
            "My schedule",
            "Map",
            "Notifications",
            "Workshops",
            "Timetable",
            "1 event / year",
            "Basic support",
            "1000 users",
          ],
        },
        {
          name: "Standard",
          price: "€1299",
          period: "/ year",
          features: [
            "Brand customizations",
            "Web app",
            "Native Android app",
            "Native iOS app",
            "Administration access",
            "Offline data",
            "My schedule",
            "Map",
            "Notifications",
            "Workshops",
            "Timetable",
            "Multiple events / year",
            "Premium support",
            "5000 users",
          ],
        },
        {
          name: "Custom",
          price: "Negotiable",
          period: "",
          features: [
            "Web, Android, iOS",
            "Custom set of features",
            "Custom UI modifications",
            "5000+ users",
            "Discounts for non-profits",
            "Possible lifetime licence",
          ],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      location: "Location",
      address: "Ostrava 70200, Czech Republic",
      phone: "Phone",
      email: "Email",
    },
    team: {
      title: "Our Team",
    },
    footer: {
      tagline: "Mobile solution for both participants and organizers.",
      menu: "Menu",
      usefulLinks: "Useful Links",
      privacyPolicy: "Privacy Policy",
      startApp: "Start the app",
      github: "GitHub",
      download: "Download",
    },
  },
  cs: {
    nav: {
      features: "Funkce",
      screenshots: "Screenshoty",
      faq: "FAQ",
      pricing: "Ceník",
      contact: "Kontakt",
      langSwitch: "English",
    },
    hero: {
      title: "Festival. Setkání. Konference.",
      subtitle: "Mobilní aplikace pro účastníky i organizátory.",
      tryNow: "Spustit DEMO aplikaci",
      contactUs: "Kontaktujte nás",
    },
    features: {
      items: [
        {
          title: "Dostupné na všech platformách",
          description:
            "Ať už používáte iPhone, Android nebo prohlížíte z počítače, s Festapp nenarazíte na žádné omezení.",
        },
        {
          title: "Workshopy",
          description:
            "Uvnitř Festapp můžete vytvářet workshopy a přednášky s omezenou kapacitou. Každý program ukazuje aktuálně dostupná místa. Účastníci si mohou rezervovat místo kliknutím.",
        },
        {
          title: "Notifikace",
          description:
            "Posílejte a přijímejte notifikace o změnách harmonogramu, exkluzivních nabídkách nebo jiných oznámeních.",
        },
        {
          title: "Mapa",
          description:
            "S Festapp dostanete interaktivní mapu, která Vás zavede k pódiím, stánkům či na jiné místa.",
        },
        {
          title: "Administrativa",
          description:
            "Organizátoři mohou v rámci Festapp přistupovat k zabezpečenému dashboardu s možností měnit programy akcí.",
        },
        {
          title: "Přístup offline",
          description:
            "Špatný signál nebo konference v kamenné budově nezabrání procházet program, mapu a další informace.",
        },
        {
          title: "Vlastní program",
          description:
            "Festapp umožňuje účastníkům vybrat si programy a zařadit je do vlastního harmonogramu.",
        },
        {
          title: "Rychlost, bezpečnost a open-source",
          description:
            "Festapp kombinuje špičkové technologie, robustní bezpečnost. Kód je veřejný na GitHubu.",
        },
      ],
    },
    screenshots: {
      title: "Screenshoty aplikace",
    },
    howItWorks: {
      title: "Jak to funguje?",
      subtitle:
        "Po kontaktování obdržíte detailní DEMO aplikaci. Pokud se rozhodnete pokračovat, dohodneme se na konkrétních detailech a vytvoření aplikace může začít.",
      steps: [
        {
          title: "Vlastní značka",
          description: "Uveďte své logo, písmo, barvy či vlastní ikony.",
        },
        {
          title: "Publikování",
          description:
            "Vaše aplikace se všemi úpravami bude zkompilována a publikována na Appstore a Google Play.",
        },
        {
          title: "Dodání",
          description:
            "Pošleme Vám odkazy na publikované aplikace s přístupem pro administrátory.",
        },
      ],
    },
    admin: {
      title: "Administrace",
      features: [
        "V tabulce programů můžete přidat vše, co se bude na Vaší akci dít.",
        "Je možné přidat všechna místa s ikonami na mapu.",
        "Vyplníte tu všechny informace včetně klikatelných telefonních čísel.",
        "Přidáte nebo importujete účastníky a organizátory.",
        "Dají se tu vytvářet novinky a posílat push notifikace.",
        "S funkcí skupinek můžete propojit lidi např. do diskuze.",
      ],
      cta: "Kontaktujte nás pro další detaily",
    },
    faq: {
      title: "Často kladené otázky",
      items: [
        {
          question:
            "Jaký je rozdíl mezi nativní a webovou verzí aplikace?",
          answer:
            "Obě varianty lze instalovat do telefonu. Hlavním rozdílem je, že nativní aplikace je publikována v Appstore a Play Store s vyšším výkonem.",
        },
        {
          question: "Bude mi aplikace fungovat i na Windows?",
          answer:
            "Webová verze aplikace je přístupná ze všech běžně používaných prohlížečů, takže ano.",
        },
        {
          question:
            "Jakým způsobem se do aplikace dostanou účastníci?",
          answer:
            "Součástí aplikace je proces importu (CSV) nebo necháte uživatele zaregistrovat se sami.",
        },
        {
          question: "Které jazyky aplikace podporuje?",
          answer:
            "Zatím aplikace podporuje němčinu, polštinu, češtinu, slovenštinu a ukrajinštinu. Další jazyky jsou v plánu.",
        },
        {
          question:
            "Na jednom workshopu potřebuji 50% mužů a 50% žen. Je to možné?",
          answer:
            "Ano, je to možné nastavit v administraci na záložce události.",
        },
      ],
      stillQuestion: "Stále máte otázku?",
      askHere: "Položte ji zde",
    },
    pricing: {
      title: "Ceník",
      subtitle: "Roční předplatné",
      purchase: "Zakoupit",
      plans: [
        {
          name: "Minimální",
          price: "11 990 CZK",
          period: "/ rok",
          features: [
            "Vlastní grafika",
            "Instalovatelná webová aplikace",
            "Nativní Android aplikace",
            "Nativní iOS aplikace",
            "Přístup k administraci",
            "Offline data",
            "Můj program",
            "Mapa",
            "Notifikace",
            "Workshopy",
            "Tabulka s programem",
            "1 událost / rok",
            "Základní podpora",
            "maximum 1000 uživatelů",
          ],
        },
        {
          name: "Standard",
          price: "32 990 CZK",
          period: "/ rok",
          features: [
            "Vlastní grafika",
            "Instalovatelná webová aplikace",
            "Nativní Android aplikace",
            "Nativní iOS aplikace",
            "Přístup k administraci",
            "Offline data",
            "Můj program",
            "Mapa",
            "Notifikace",
            "Workshopy",
            "Tabulka s programem",
            "Více událostí / rok",
            "Rozšířená podpora",
            "maximum 5000 uživatelů",
          ],
        },
        {
          name: "Na míru",
          price: "Dohodou",
          period: "",
          features: [
            "Web, Android, iOS",
            "Vlastní sada funkcí",
            "Vlastní úpravy UI",
            "Více než 5000 uživatelů",
            "Slevy pro neziskové organizace",
            "Možnost doživotní licence",
          ],
        },
      ],
    },
    contact: {
      title: "Kontaktujte nás",
      location: "Lokalita",
      address: "Ostrava 70200, Česká republika",
      phone: "Telefonní číslo",
      email: "E-mailová adresa",
    },
    team: {
      title: "Náš tým",
    },
    footer: {
      tagline: "Mobilní řešení pro účastníky i organizátory.",
      menu: "Menu",
      usefulLinks: "Odkazy",
      privacyPolicy: "Ochrana osobních údajů",
      startApp: "Spustit aplikaci",
      github: "Dejte nám hvězdičku na GitHubu!",
      download: "Stáhnout",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
