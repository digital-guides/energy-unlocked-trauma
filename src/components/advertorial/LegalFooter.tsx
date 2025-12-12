const LegalFooter = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-article">
        <div className="text-xs text-muted-foreground/70 space-y-3 text-center">
          <p>
            Este contenido es solo informativo y no reemplaza el consejo médico profesional. 
            Si experimentas síntomas persistentes, consulta con un profesional de la salud.
          </p>
          <p>
            Las referencias científicas mencionadas son de dominio público y están disponibles 
            en literatura científica revisada por pares.
          </p>
          <p className="pt-2 text-muted-foreground/50">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
