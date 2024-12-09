import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ClientSection from "./components/ClientSection";
import ServiceSection from "./components/ServiceSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialSection from "./components/TestimonialSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ClientSection />
        <ServiceSection />
        <PortfolioSection/>
        <TestimonialSection/>
        <TeamSection/>
        <ContactSection/>
      </main>
      <FooterSection/>
    </>
  );
}
