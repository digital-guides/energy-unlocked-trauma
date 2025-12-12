import { Link } from "react-router-dom";
import HeroSection from "@/components/advertorial/HeroSection";
import StorytellingSection from "@/components/advertorial/StorytellingSection";
import StoryClosingSection from "@/components/advertorial/StoryClosingSection";
import ScientificSection from "@/components/advertorial/ScientificSection";
import SecondaryImageSection from "@/components/advertorial/SecondaryImageSection";
import AffectedFunctionsSection from "@/components/advertorial/AffectedFunctionsSection";
import InsightBox from "@/components/advertorial/InsightBox";
import NotYourFaultSection from "@/components/advertorial/NotYourFaultSection";
import CTASection from "@/components/advertorial/CTASection";
import LegalFooter from "@/components/advertorial/LegalFooter";
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Enlace temporal para ver la otra página */}
      <div className="bg-primary/10 p-3 text-center">
        <Link to="/adv-4-trauma" className="text-primary underline font-medium">
          → Ver página Adv 4 - Trauma
        </Link>
      </div>
      <HeroSection />
      <StorytellingSection />
      <StoryClosingSection />
      <ScientificSection />
      <SecondaryImageSection />
      <AffectedFunctionsSection />
      <InsightBox />
      <NotYourFaultSection />
      <CTASection />
      <LegalFooter />
    </main>
  );
};

export default Index;
