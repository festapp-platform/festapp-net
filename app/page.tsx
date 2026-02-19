import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import HowItWorks from "./components/HowItWorks";
import Administration from "./components/Administration";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Administration />
      <FAQ />
      <Pricing />
      <Contact />
      <Team />
      <Footer />
    </>
  );
}
