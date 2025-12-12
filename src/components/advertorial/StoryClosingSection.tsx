const StoryClosingSection = () => {
  return (
    <section className="py-4">
      <div className="container-article">
        <div className="salmon-box">
          <p className="text-lg md:text-xl font-serif text-primary mb-3">
            Hasta que descubrí algo que me cambió la vida:
          </p>
          
          <p className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">
            No me había perdido.<br />
            Me había apagado para sobrevivir.
          </p>
          
          <div className="space-y-3 body-text text-foreground/85">
            <p>
              Mi sistema nervioso estaba en <strong className="text-primary">modo conservación de energía</strong>, una respuesta biológica que ocurre tras periodos prolongados de estrés, sobrecarga emocional o alerta constante.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="text-muted-foreground">No era flojera.</span>
              <span className="text-muted-foreground">No era debilidad.</span>
              <span className="font-semibold text-primary">Era protección.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryClosingSection;
