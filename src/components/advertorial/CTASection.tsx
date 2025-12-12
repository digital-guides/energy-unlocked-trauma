import { ArrowRight, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-muted/50 to-background">
      <div className="container-article text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-3">
            Descubre qué está pasando con tu energía
          </h2>
          
          <p className="body-text text-muted-foreground mb-5">
            Haz el Test y descubre qué tipo de desregulación puede estar apagando tu energía.
          </p>
          
          <button className="cta-button group mb-3">
            <span>Hacer el Test Ahora</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>Te tomará menos de 2 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
