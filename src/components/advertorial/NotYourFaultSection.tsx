import { Heart } from "lucide-react";

const NotYourFaultSection = () => {
  const points = [
    "el cuerpo reduce energía cuando percibe amenaza prolongada",
    "la motivación baja no es falla: es una respuesta adaptativa",
    "el cerebro apaga funciones 'no esenciales' para mantenerte segura"
  ];

  return (
    <section className="py-4">
      <div className="container-article">
        <div className="salmon-box relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-salmon-dark fill-salmon" />
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary">
                No es tu culpa
              </h2>
            </div>
            
            <p className="text-xl font-serif text-primary mb-4">
              Tu sistema nervioso estaba haciendo su trabajo.
            </p>
            
            <p className="text-muted-foreground mb-3">
              Los estudios de Porges, McEwen y Barrett muestran que:
            </p>
            
            <ul className="space-y-2 mb-4">
              {points.map((point, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-3 border-t border-secondary/50">
              <p className="text-lg text-muted-foreground">
                No era falta de fuerza.
              </p>
              <p className="text-xl font-serif font-semibold text-primary mt-1">
                Era biología de supervivencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotYourFaultSection;
