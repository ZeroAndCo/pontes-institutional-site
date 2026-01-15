import { Heart, ShoppingBag, Megaphone, Calendar, Fence, BookText } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Marketing & Relacionamento",
      description: "Projetos de incentivo à leitura para a base de clientes, com foco em relacionamento e fidelização.",
      examples: [
        "Rodas de conversa com temas específicos",
        "Clube de livros com descontos",
        "Momentos de leituras com autores",
      ],
      color: "primary",
    },
    {
      icon: ShoppingBag,
      title: "Ativação & Vendas",
      description: "Projetos de incentivo à leitura com parceiros locais para aumento de vendas através de ativações.",
      examples: [
        "Lançamento de livros com públicos distintos",
        "Feira literária proprietária",
        "Ações digitais com autores e influenciadores",
      ],
      color: "accent",
    },
    {
      icon: Megaphone,
      title: "Marketing & Impacto Social",
      description: "Projetos que promovem o marketing social através de ações de impacto social concreto.",
      examples: [
        "Campanhas de doação de livros",
        "Matchfunding com clientes e empresa",
        "Conteúdos sociais sobre leitura",
      ],
      color: "teal",
    },
    {
      icon: Calendar,
      title: "Celebrações & Eventos",
      description: "Projetos de incentivo à leitura com ações para datas comemorativas e eventos especiais.",
      examples: [
        "Calendário de datas comemorativas",
        "Feira Literária de grande porte",
        "Eventos infantis no Dia das Crianças",
      ],
      color: "mustard",
    },
    {
      icon: Fence,
      title: "Desenvolvimento Territorial",
      description: "Projetos que promovam a cultura leitora e a educação em territórios determinados, onde o impacto social poderá ser acompanhado e medido.",
      examples: [
        "Calendário de datas comemorativas",
        "Feira Literária de grande porte",
        "Eventos infantis no Dia das Crianças",
      ],
      color: "orange",
    },
    {
      icon: BookText,
      title: "Campanhas de Incentivo à Leitura",
      description: "Projetos que usam a força da comunicação para mobilização social em torno dos temas ligados ao incentivo à leitura.",
      examples: [
        "Calendário de datas comemorativas",
        "Feira Literária de grande porte",
        "Eventos infantis no Dia das Crianças",
      ],
      color: "brown",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; bgHover: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", bgHover: "group-hover:bg-primary" },
      accent: { bg: "bg-accent/10", text: "text-accent", bgHover: "group-hover:bg-accent" },
      teal: { bg: "bg-teal/10", text: "text-teal", bgHover: "group-hover:bg-teal" },
      mustard: { bg: "bg-mustard/10", text: "text-mustard", bgHover: "group-hover:bg-mustard" },
      orange: { bg: "bg-orange/10", text: "text-orange", bgHover: "group-hover:bg-orange" },
      brown: { bg: "bg-brown/10", text: "text-brown", bgHover: "group-hover:bg-brown" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="pilares" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Pilares de Atuação
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Fortalecendo o ecossistema com{" "}
            <span className="text-gradient-brand">circularidade</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Nossos pilares de atuação permitem desenvolver diferentes tipos de projetos personalizados que atendam os objetivos de negócios, marcas e organizações, promovendo o impacto e a responsabilidade social.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const colors = getColorClasses(pillar.color);
            return (
              <div
                key={pillar.title}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${colors.bg} ${colors.text} ${colors.bgHover} group-hover:text-white transition-all`}>
                    <pillar.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* <div className="space-y-3 pl-4 border-l-2 border-muted">
                  <p className="text-sm font-medium text-foreground">Exemplos:</p>
                  {pillar.examples.map((example, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
