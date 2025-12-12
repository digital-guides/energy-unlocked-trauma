import { Lightbulb } from "lucide-react";

const InsightBox = () => {
  return (
    <section className="py-4">
      <div className="container-article">
        <div className="insight-box relative">
          <div className="absolute -top-5 left-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--insight-border))] flex items-center justify-center shadow-md">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
          </div>
          
          <div className="pt-4 space-y-2 text-center">
            <p className="text-lg text-muted-foreground italic">
              De pronto entendí:
            </p>
            <p className="text-xl md:text-2xl font-serif text-primary font-medium leading-relaxed">
              No estaba menos capaz.<br />
              No estaba desmotivada.<br />
              <span className="text-primary/90">Mi cuerpo estaba intentando protegerme del agotamiento total.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightBox;
