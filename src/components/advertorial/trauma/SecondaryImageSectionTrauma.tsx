import traumaSecondary from "@/assets/trauma-secondary.jpg";

const SecondaryImageSectionTrauma = () => {
  return (
    <section className="py-2">
      <div className="container-article">
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img 
            src={traumaSecondary} 
            alt="Mujer reflexionando sobre salud mental y neurociencia" 
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default SecondaryImageSectionTrauma;
