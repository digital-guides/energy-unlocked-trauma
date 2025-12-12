const StorytellingSectionTrauma = () => {
  return (
    <section className="py-3">
      <div className="container-article">
        <div className="space-y-3 body-text">
          <p className="text-xl md:text-2xl font-serif text-primary font-medium">
            Durante años viví en modo alerta.
          </p>
          
          <ul className="space-y-1.5 pl-4">
            {[
              "Saltos por ruidos mínimos.",
              "Rigidez constante en el pecho.",
              "Sobresaltos emocionales.",
              "Hipervigilancia.",
              "Miedo sin explicación.",
              "Dificultad para relajarme."
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-foreground/80"
              >
                <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="quote-block py-2 my-3">
            <p className="text-lg">
              No importaba lo que hiciera: mi cuerpo estaba listo para defenderse.
            </p>
          </div>
          
          <div className="space-y-1 text-muted-foreground">
            <p>La gente decía que era "sensible", "nerviosa", "exagerada".</p>
            <p className="text-lg font-medium text-primary">Pero no era nada de eso.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSectionTrauma;
