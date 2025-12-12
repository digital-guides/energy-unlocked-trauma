const StorytellingSection = () => {
  return (
    <section className="py-6">
      <div className="container-article">
        <div className="space-y-4 body-text">
          <p className="text-xl md:text-2xl font-serif text-primary font-medium">
            Hubo un momento en el que dejé de reconocerme.
          </p>
          
          <div className="space-y-1 text-muted-foreground">
            <p>No era falta de voluntad.</p>
            <p>No era depresión.</p>
            <p>No era "pereza".</p>
          </div>
          
          <p className="text-lg font-medium text-primary">Era otra cosa.</p>
          
          <p className="text-muted-foreground">Un día me di cuenta de que:</p>
          
          <ul className="space-y-2 pl-4">
            {[
              "dormía, pero nunca descansaba",
              "hacía planes, pero no tenía energía para cumplirlos",
              "estaba con gente, pero no sentía conexión",
              "nada me emocionaba",
              "mi mente estaba lenta, como en niebla",
              "y cada día me costaba un poco más ser yo"
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
          
          <div className="quote-block py-3 my-4">
            <p className="text-lg">
              Era como si una parte interna se hubiera apagado para protegerme.
            </p>
          </div>
          
          <p className="text-muted-foreground">
            Y me culpaba.<br />
            Todos los días.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
