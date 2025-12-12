const StoryClosingSectionTrauma = () => {
  return (
    <section className="py-2">
      <div className="container-article">
        <div className="salmon-box">
          <p className="text-lg md:text-xl font-serif text-primary mb-2">
            Mi cuerpo estaba cargando historias que mi mente ya no recordaba.
          </p>
          
          <p className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-3">
            No reaccionaba al presente.<br />
            Reaccionaba a lo que un día necesitó para sobrevivir.
          </p>
          
          <div className="space-y-2 body-text text-foreground/85">
            <p className="font-semibold text-primary">Era trauma acumulado.</p>
            
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="text-muted-foreground">Años de tensión guardada.</span>
              <span className="text-muted-foreground">Años de estar lista para lo peor.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryClosingSectionTrauma;
