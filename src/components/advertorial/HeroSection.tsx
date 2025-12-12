import heroMain from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container-article">
        <div className="text-center mb-6 fade-in">
          <h1 className="title-hero mb-4">
            "No había perdido mi vida… había perdido mi energía."
          </h1>
          <p className="body-text text-muted-foreground max-w-xl mx-auto">
            Una explicación desde la neurociencia sobre por qué tu motivación, claridad mental y ganas pueden apagarse sin razón aparente.
          </p>
        </div>
        
        <div className="fade-in stagger-2">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={heroMain} 
            alt="Mujeres experimentando fatiga y agotamiento emocional" 
            className="w-full h-auto object-contain"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
