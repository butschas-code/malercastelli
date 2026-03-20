import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Process } from "@/components/sections/Process";
import { LocalTrust } from "@/components/sections/LocalTrust";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <Process />
      <LocalTrust />
      <FAQ />
      <ContactSection />
    </>
  );
}
