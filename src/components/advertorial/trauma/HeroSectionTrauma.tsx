import traumaHero from "@/assets/trauma-hero.jpg";

const HeroSectionTrauma = () => {
  return (
    <section className="pt-6 pb-2">
      <div className="container-article text-center">
        <h1 className="text-2xl md:text-4xl font-serif font-bold text-primary leading-tight mb-3 fade-in">
          "Vivir lista para lo peor no es personalidad… es supervivencia."
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto fade-in stagger-1">
          Una explicación basada en neurociencia sobre por qué tu cuerpo puede permanecer en alerta incluso cuando tu vida ya no está en peligro.
        </p>
        
        <div className="fade-in stagger-2 mt-4">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={traumaHero} 
              alt="Mujer experimentando ansiedad y estado de alerta constante" 
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTrauma;
