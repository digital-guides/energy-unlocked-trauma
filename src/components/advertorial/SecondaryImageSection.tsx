import fatigueSecondary from "@/assets/fatigue-secondary.jpg";

const SecondaryImageSection = () => {
  return (
    <section className="py-4">
      <div className="container-article">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={fatigueSecondary} 
            alt="Mujeres experimentando fatiga mental y física" 
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default SecondaryImageSection;
