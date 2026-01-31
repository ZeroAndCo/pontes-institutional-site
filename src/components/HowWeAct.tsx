import { Palette, Handshake, BookMarked, Building2, FileCheck, Fence, Users, BookOpenText, LibraryBig } from "lucide-react";

const HowWeAct = () => {
  const actions = [
    {
      icon: Users,
      title: "Projetos de Impacto Social",
      description: "Desenvolvemos projetos de incentivo à leitura em comunidades buscando a ampliação do desenvolvimento territorial e o impacto social local.",
    },
    {
      icon: BookOpenText,
      title: "Articulações no Ecossistema da Leitura",
      description: "Desenvolvemos projetos e campanhas de incentivo à leitura através da articulação de diferentes atores do ecossistema de leitura/livro no país.",
    },
    {
      icon: LibraryBig,
      title: "Projetos para marcas",
      description: "Desenvolvemos projetos de incentivo à leitura para marcas, com eventos, experiências, ações e ativações de vendas e desenvolvimento de produtos sociais vinculados à leitura.",
    },
    // {
    //   icon: Fence,
    //   title: "Projetos Territoriais com Organizações",
    //   description: "Desenvolvimento de projetos de incentivo à leitura junto de comunidades e territórios específicos com organizações voltadas ao impacto social.",
    // },
    // {
    //   icon: Handshake,
    //   title: "Articulação de parcerias",
    //   description: "Conexão com iniciativas locais, editoras e instituições para fortalecer o ecossistema de leitura.",
    // },
    // {
    //   icon: FileCheck,
    //   title: "Transparência, Mapeamento de Impacto e Relatoria",
    //   description: "Gestão clara dos recursos com relatórios detalhados de todas as entregas realizadas.",
    // },
  ];

  return (
    <section id="como-atuamos" className="section-padding gradient-warm">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Nossa Atuação</span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Como <span className="text-gradient-brand">atuamos</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            O hub desenvolve projetos para desenvolver a cultura leitora, seja ao lado de empresas com foco em marketing social e responsabilidade social, seja ao lado de organização com foco em impacto social e desenvolvimento territorial. Sempre
            buscando criar um caminho agregador e acessível para a leitura.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={action.title} className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              <div className="relative">
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <action.icon size={28} />
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{action.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{action.description}</p>
              </div>

              {/* Number indicator */}
              <span className="absolute bottom-4 right-6 text-6xl font-display font-bold text-muted/30 group-hover:text-primary/20 transition-colors">{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeAct;
