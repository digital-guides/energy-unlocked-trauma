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
        
        {/* Placeholder for hero image - will be added later */}
        <div className="fade-in stagger-2 mt-4">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted/30 h-64 md:h-80 flex items-center justify-center">
            <p className="text-muted-foreground italic">Imagen principal pendiente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTrauma;
