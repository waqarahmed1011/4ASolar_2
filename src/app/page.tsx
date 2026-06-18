import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { NABCEPBar } from "@/components/NABCEPBar";
import { ContactSection } from "@/components/ContactSection";
import { ItemsSlider } from "@/components/ItemsSlider";
import { StatisticsSection } from "@/components/StatisticsSection";
import { ILSFASection } from "@/components/ILSFASection";
import { BrandPromiseSection } from "@/components/BrandPromiseSection";
import { MapSection } from "@/components/MapSection";
import { HighlighterServices } from "@/components/HighlighterServices";
import { ProjectsSlider } from "@/components/ProjectsSlider";
import { LatestNews } from "@/components/LatestNews";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <NABCEPBar />
      <ContactSection />
      <ItemsSlider />
      <StatisticsSection />
      <ILSFASection />
      <BrandPromiseSection />
      <MapSection />
      <HighlighterServices />
      <ProjectsSlider />
      <LatestNews />
      <SiteFooter />
    </main>
  );
}
