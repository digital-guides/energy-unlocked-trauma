import { Brain } from "lucide-react";

const ScientificSection = () => {
  const symptoms = [
    "fatiga persistente",
    "disminución de motivación",
    "fallas en la atención",
    "apatía emocional",
    "dificultad para tomar decisiones",
    "baja tolerancia al estrés"
  ];

  return (
    <section className="py-6 bg-muted/30">
      <div className="container-article">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <h2 className="title-section mb-0">¿Qué estaba pasando realmente?</h2>
        </div>
        
        <div className="space-y-4 body-text">
          <p className="text-foreground/85">
            El neuroendocrinólogo <strong className="text-primary">Bruce McEwen</strong>, experto en estrés crónico, explica que cuando el sistema nervioso permanece activo durante demasiado tiempo sin recuperar, el cuerpo entra en un estado de "desgaste" llamado <em className="text-primary font-medium">carga alostática</em>.
          </p>
          
          <p className="text-muted-foreground font-medium">Esto puede generar:</p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {symptoms.map((symptom, index) => (
              <li 
                key={index}
                className="flex items-center gap-3 bg-card p-3 rounded-lg border border-border/50"
              >
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                <span className="text-foreground/80">{symptom}</span>
              </li>
            ))}
          </ul>
          
          <div className="highlight-box mt-4">
            <p className="text-foreground/85 mb-3">
              La doctora <strong className="text-primary">Lisa Feldman Barrett</strong> señala que el cerebro, al no sentir seguridad suficiente, reduce funciones cognitivas y emocionales para "ahorrar recursos".
            </p>
            
            <p className="text-foreground/85">
              Y <strong className="text-primary">Stephen Porges</strong> (Teoría Polivagal) describe este estado como una caída del tono vagal ventral, llevando al cuerpo a un <em>modo de bajo rendimiento</em> para conservar energía.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificSection;
