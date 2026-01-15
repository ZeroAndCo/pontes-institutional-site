import { Sparkles, Target, Fence } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Incentivo à leitura",
      description: "Promovemos o acesso e o hábito da leitura em comunidades de todo o Brasil.",
    },
    {
      icon: Target,
      title: "Impacto social",
      description: "Usamos a leitura como ponte para transformação social e redução de desigualdades.",
    },
    {
      icon: Fence,
      title: "Desenvolvimento Territorial",
      description: "Fortalecimento de comunidades através da cultura leitora que promove educação.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Quem Somos
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Uma plataforma de{" "}
              <span className="text-gradient-brand">impacto social</span> em escala
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Pontes para Leitura</strong> é um hub de incentivo à leitura 
              que existe para levar livros e fortalecer o hábito da leitura em diferentes territórios do Brasil.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa proposta é conectar pessoas, empresas e instituições a projetos que usam a leitura como 
              ponte para transformação social. Nascemos da união de duas profissionais com ampla experiência 
              em impacto social e cultural.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-secondary/50 rounded-r-lg">
              <p className="text-foreground italic font-serif text-lg">
                "Nosso propósito é inspirar uma cultura leitora contínua."
              </p>
            </blockquote>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Culture Tag */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Cultura doadora", "Ações regionais", "Impacto nacional"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
