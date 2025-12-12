import { Helmet } from "react-helmet-async";
import HeroSectionTrauma from "@/components/advertorial/trauma/HeroSectionTrauma";
import StorytellingSectionTrauma from "@/components/advertorial/trauma/StorytellingSectionTrauma";
import StoryClosingSectionTrauma from "@/components/advertorial/trauma/StoryClosingSectionTrauma";
import ScientificSectionTrauma from "@/components/advertorial/trauma/ScientificSectionTrauma";
import SecondaryImageSectionTrauma from "@/components/advertorial/trauma/SecondaryImageSectionTrauma";
import AffectedFunctionsSectionTrauma from "@/components/advertorial/trauma/AffectedFunctionsSectionTrauma";
import InsightBoxTrauma from "@/components/advertorial/trauma/InsightBoxTrauma";
import NotYourFaultSectionTrauma from "@/components/advertorial/trauma/NotYourFaultSectionTrauma";
import CTASectionTrauma from "@/components/advertorial/trauma/CTASectionTrauma";
import LegalFooter from "@/components/advertorial/LegalFooter";

const AdvTrauma = () => {
  return (
    <>
      <Helmet>
        <title>Vivir lista para lo peor no es personalidad… es supervivencia</title>
        <meta name="description" content="Una explicación basada en neurociencia sobre por qué tu cuerpo puede permanecer en alerta incluso cuando tu vida ya no está en peligro." />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <HeroSectionTrauma />
        <StorytellingSectionTrauma />
        <StoryClosingSectionTrauma />
        <ScientificSectionTrauma />
        <SecondaryImageSectionTrauma />
        <AffectedFunctionsSectionTrauma />
        <InsightBoxTrauma />
        <NotYourFaultSectionTrauma />
        <CTASectionTrauma />
        <LegalFooter />
      </main>
    </>
  );
};

export default AdvTrauma;
