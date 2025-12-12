import { Brain } from "lucide-react";

const ScientificSectionTrauma = () => {
  return (
    <section className="py-3 bg-muted/30">
      <div className="container-article">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-primary">¿Qué estaba pasando realmente?</h2>
        </div>
        
        <div className="space-y-3 body-text">
          <p className="text-muted-foreground">
            El psiquiatra <strong className="text-primary">Bessel van der Kolk</strong>, en <em>The Body Keeps the Score</em>, explica que el cuerpo almacena memorias traumáticas no como historias, sino como sensaciones.
          </p>
          
          <p className="text-muted-foreground">
            El sistema nervioso aprende patrones automáticos de defensa:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { response: "lucha", english: "fight" },
              { response: "huida", english: "flight" },
              { response: "congelamiento", english: "freeze" },
              { response: "complacencia", english: "fawn" }
            ].map((item, index) => (
              <div key={index} className="bg-background/60 rounded-lg p-2 text-center">
                <span className="text-primary font-medium">{item.response}</span>
                <span className="text-muted-foreground text-sm ml-1">({item.english})</span>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground">
            El neurocientífico <strong className="text-primary">Stephen Porges</strong> detalla que cuando el sistema detecta amenaza —real o percibida— activa la rama simpática sin distinguir si el peligro ya pasó.
          </p>
          
          <p className="text-muted-foreground">
            Y <strong className="text-primary">Andrew Huberman</strong> confirma que un sistema en alerta puede modificar respiración, tensión muscular, digestión y percepción de seguridad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificSectionTrauma;
