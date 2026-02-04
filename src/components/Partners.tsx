const Partners = () => {
  // Placeholder logos - replace with actual partner logos
  const partners = [
    {
      name: "Parceiro 1",
      logo: "https://via.placeholder.com/200x80/f7f2e8/2a7d7d?text=Parceiro+1",
    },
    {
      name: "Parceiro 2",
      logo: "https://via.placeholder.com/200x80/f7f2e8/2a7d7d?text=Parceiro+2",
    },
    {
      name: "Parceiro 3",
      logo: "https://via.placeholder.com/200x80/f7f2e8/2a7d7d?text=Parceiro+3",
    },
    {
      name: "Parceiro 4",
      logo: "https://via.placeholder.com/200x80/f7f2e8/2a7d7d?text=Parceiro+4",
    },
    {
      name: "Parceiro 5",
      logo: "https://via.placeholder.com/200x80/f7f2e8/2a7d7d?text=Parceiro+5",
    },
    {
      name: "Parceiro 6",
      logo: "https://via.placeholder.com/200x80/f7f2e8/2a7d7d?text=Parceiro+6",
    },
  ];

  return (
    <section id="parceiros" className="section-padding gradient-warm">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Parceiros
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Quem caminha{" "}
            <span className="text-gradient-brand">conosco</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Empresas e organizações que acreditam no poder da leitura para transformar vidas.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ser um parceiro do Hub Pontes para Leitura?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Entre em contato conosco
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
