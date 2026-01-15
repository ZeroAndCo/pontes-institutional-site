import { Instagram, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Adriane Laste",
      role: "Co-idealizadora",
      company: "CLIC - Nossa Biblioteca",
      bio: "Fundadora da CLIC, empresa que desenvolve projetos socioculturais como o 'Nossa Biblioteca', iniciativa de doação de acervos para bibliotecas de escolas públicas em todo o país.",
      quote: "Nossa missão é levar livros onde eles faltam, onde eles podem se tornar caminho, onde eles agregam e para qualquer lugar que possamos incentivar uma cultura leitora em nosso país. Queremos apresentar novos mundos, nas perspectivas e possibilidades através da leitura e ao incentivo à leitura.",
      linkedin: "https://www.linkedin.com/in/adrianelaste/",
      instagram: "https://www.instagram.com/nossabibliotecaoficial/",
      email: "adriane@nossabiblioteca.com.br",
      initials: "AL",
      color: "primary",
    },
    {
      name: "Nelma Zero",
      role: "Co-idealizadora",
      company: "Zero&Co Consultoria",
      bio: "Fundadora da consultoria Zero&Co, que atua com desenvolvimento territorial em sustentabilidade e impacto social, conectando territórios, iniciativas e parceiros.",
      quote: "O que nos incentivou a criar o hub foi a possibilidade de juntar a paixão pela leitura e pelo impacto social criando ações múltiplas e diversas onde podemos construir espaços de igualdade e oportunidades para todos. E quem sabe aos poucos sermos um pouco da mudança dos números de leitura do Brasil.",
      linkedin: "https://www.linkedin.com/in/nelmazero/",
      instagram: "https://www.instagram.com/zeroand.co/",
      email: "nelma@zeroand.co",
      initials: "NZ",
      color: "accent",
    },
  ];

  return (
    <section id="equipe" className="section-padding gradient-warm">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Nossa Equipe
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            As pessoas por trás do{" "}
            <span className="text-gradient-brand">hub</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Juntas, somamos nossas forças para criar o Hub Pontes para Leitura e termos um espaço de desenvolvimento de projetos, articulação territorial e construção de impacto sistêmico.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Avatar Section */}
              <div className={`relative h-48 ${founder.color === 'primary' ? 'gradient-hero' : 'gradient-accent'} flex items-center justify-center flex-shrink-0`}>
                <div className="w-32 h-32 rounded-full bg-card flex items-center justify-center text-4xl font-display font-bold text-foreground shadow-lg">
                  {founder.initials}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                  <p className="text-muted-foreground text-sm">{founder.company}</p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                  {founder.bio}
                </p>

                <blockquote className="border-l-4 border-accent pl-4 py-2 bg-secondary/50 rounded-r-lg mb-6 flex-grow">
                  <p className="text-foreground italic font-serif text-sm">
                    "{founder.quote}"
                  </p>
                </blockquote>

                {/* Social Links */}
                <div className="flex gap-3 mt-auto">
                  <a href={founder.instagram} className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href={founder.linkedin}  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${founder.email}`} className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto p-8 bg-card rounded-2xl border border-border">
          <p className="text-xl text-foreground font-medium leading-relaxed">
            Juntas, elas criaram o hub Pontes para Leitura para somar forças, articular campanhas recorrentes 
            e construir um impacto sistêmico: <span className="text-primary font-semibold">mais pessoas lendo</span>, 
            em <span className="text-accent font-semibold">mais lugares</span>, 
            com <span className="text-teal font-semibold">mais oportunidades</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
