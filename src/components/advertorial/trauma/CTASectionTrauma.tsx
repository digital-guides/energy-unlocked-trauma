import { ArrowRight, Clock } from "lucide-react";

const CTASectionTrauma = () => {
  return (
    <section className="py-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="container-article text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-2">
            ¿Tu sistema nervioso está en modo alerta crónica?
          </h2>
          
          <p className="body-text text-muted-foreground mb-4">
            Haz el Test y descubre si tu sistema nervioso está en modo alerta crónica.
          </p>
          
          <button className="cta-button group mb-2">
            <span>Hacer el Test Ahora</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>Toma menos de 2 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionTrauma;
