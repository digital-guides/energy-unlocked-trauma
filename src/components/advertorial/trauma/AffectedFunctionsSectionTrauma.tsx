const AffectedFunctionsSectionTrauma = () => {
  const functions = [
    "Respiración",
    "Tensión muscular",
    "Sueño",
    "Foco mental",
    "Digestión",
    "Relaciones interpersonales"
  ];

  return (
    <section className="py-2">
      <div className="container-article">
        <h3 className="text-lg font-medium text-muted-foreground mb-3 text-center">
          Funciones afectadas
        </h3>
        
        <div className="flex flex-wrap justify-center gap-2">
          {functions.map((func, index) => (
            <span 
              key={index}
              className="chip transition-all duration-300 hover:bg-secondary/50 hover:scale-105"
            >
              {func}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffectedFunctionsSectionTrauma;
