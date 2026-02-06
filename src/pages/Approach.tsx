import { useEffect } from "react";
import { BookOpen, Target, Lightbulb, Users, Building2, Heart, Sparkles, ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { analytics } from "@/lib/analytics";

const Approach = () => {
  useEffect(() => {
    analytics.pageView("Approach", "/approach");
  }, []);

  const handleContactClick = (type: string) => {
    analytics.contactClick(type);
  };

  const handleWhatsAppClick = () => {
    analytics.whatsappClick("approach_cta");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Slide 1 - Cover */}
      <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              className="text-cream"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="container-narrow mx-auto px-6 text-center relative z-10">
          <img src={logo} alt="Pontes para Leitura" className="w-32 h-32 rounded-full mx-auto mb-8 shadow-2xl" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6">Pontes para Leitura</h1>
          <p className="text-2xl md:text-3xl text-orange-light font-display font-semibold mb-8">Nossa Proposta</p>
          <p className="text-lg text-cream/80 max-w-xl mx-auto">Co-Idealizadores: Adriane Laste (Clic) e Nelma Zero (Zero&Co)</p>

          <div className="mt-12 animate-bounce">
            <ArrowRight className="w-8 h-8 text-cream/60 rotate-90 mx-auto" />
          </div>
        </div>
      </section>

      {/* Slide 2 - Sobre */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Sobre</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8">
            Hub de Incentivo à <span className="text-primary">Leitura</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">Projetos de leitura, cultura e impacto social cocriados com marcas, territórios e instituições.</p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-l-4 border-primary">
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Impacto construído em <span className="text-accent">comunidade</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 3 - Contexto */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Contexto</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8">
            Porque a Leitura <span className="text-primary">Hoje</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8">Leitura é um tema estratégico para marcas e para o país</p>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">No Brasil, o acesso à leitura segue desigual — e isso impacta diretamente educação, cidadania, inclusão e desenvolvimento social.</p>

          <p className="text-lg text-foreground font-medium mb-6">Ao mesmo tempo, marcas são cada vez mais chamadas a:</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Target, text: "Gerar impacto social real" },
              { icon: Building2, text: "Atuar de forma consistente em ESG" },
              { icon: Heart, text: "Construir relacionamento genuíno com seus públicos" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
            <p className="text-lg text-foreground">
              <strong>A leitura conecta esses desafios</strong> de forma transversal, contínua e mensurável.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 4 - O Problema */}
      <section className="min-h-screen flex items-center py-20 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">O Problema | GAP de Mercado</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10">
            Onde muitas iniciativas <span className="text-orange-light">travam</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-orange-light">Hoje, muitas empresas:</h3>
              <ul className="space-y-4">
                {["querem atuar com educação e cultura", "reconhecem a importância da leitura", "buscam projetos com propósito"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-orange-light flex-shrink-0 mt-1" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/20 rounded-2xl p-8 border border-accent/30">
              <h3 className="text-xl font-semibold mb-6 text-orange-light">Mas encontram:</h3>
              <ul className="space-y-4">
                {["ações pontuais e pouco estruturadas", "dificuldade de conexão com territórios", "pouca governança e continuidade", "narrativas bonitas, mas pouco impacto mensurável"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-light rounded-full flex-shrink-0 mt-2" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-2xl font-display font-semibold text-orange-light">👉 Falta estrutura, articulação e estratégia.</p>
          </div>
        </div>
      </section>

      {/* Slide 5 - A Solução */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">A Solução</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O Hub <span className="text-primary">Pontes para Leitura</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">Um hub que estrutura projetos de leitura com impacto social e valor para marcas.</p>

          <p className="text-lg text-foreground font-medium mb-8">O Pontes para Leitura atua como uma plataforma de articulação, conectando:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-card p-6 rounded-xl border-2 border-primary/20">
              <Users className="w-10 h-10 text-primary mb-4" />
              <p className="text-foreground font-medium">Instituições públicas e sociais</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-primary/20">
              <Target className="w-10 h-10 text-primary mb-4" />
              <p className="text-foreground font-medium">Territórios e beneficiários</p>
            </div>
          </div>

          <p className="text-lg text-foreground font-medium mb-6">Com foco em:</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Ecossistema do livro", "Impacto social real", "Marcas e empresas", "Governança e transparência", "Comunicação responsável", "Construção de valor institucional"].map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-border">
                <p className="text-foreground text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 6 - Como Atuamos */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Como atuamos</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Modelo <span className="text-accent">Simples</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">Nosso modelo trabalha com integração</p>

          <p className="text-lg text-foreground font-medium mb-8">Trabalhamos a partir de três pilares interligados:</p>

          <div className="space-y-6 mb-10">
            {[
              {
                number: "1",
                title: "Territórios e beneficiários reais",
                description: "Demandas concretas, com parceiros locais.",
              },
              {
                number: "2",
                title: "Estrutura segura e transparente",
                description: "Captação, gestão e execução com governança.",
              },
              {
                number: "3",
                title: "Comunicação e engajamento",
                description: "Narrativas responsáveis, que ampliam impacto e relacionamento.",
              },
            ].map((pillar) => (
              <div key={pillar.number} className="bg-card p-6 rounded-xl border border-border flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{pillar.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              ➡ Projetos locais, com visão e <span className="text-accent">escala nacional</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 7 - Valor B2B */}
      <section className="min-h-screen flex items-center py-20 gradient-hero">
        <div className="container-narrow mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Valor B2B</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
            O que marcas ganham ao cocriar com o <span className="text-orange-light">Pontes para Leitura</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {["Impacto social consistente", "Fortalecimento de reputação", "Alinhamento real a agendas ESG", "Projetos com lastro territorial", "Histórias autênticas para comunicação", "Relacionamento qualificado com públicos"].map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <Sparkles className="w-8 h-8 text-orange-light mb-4 mx-auto" />
                <p className="text-cream font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/20 rounded-2xl p-8 border border-accent/30">
            <BookOpen className="w-12 h-12 text-orange-light mx-auto mb-4" />
            <p className="text-2xl font-display font-semibold text-cream">Leitura como ferramenta de impacto, vínculo e legado.</p>
          </div>
        </div>
      </section>

      {/* Slide 8 - Pilares de Serviços */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Nossos Pilares de Serviços</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Como cocriamos projetos com <span className="text-primary">empresas</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">Atuamos em quatro frentes principais:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Heart,
                title: "Marketing & Relacionamento via Leitura",
                color: "from-primary to-teal-dark",
              },
              {
                icon: BookOpen,
                title: "Ativações e parcerias com o setor do livro",
                color: "from-accent to-orange-dark",
              },
              {
                icon: Users,
                title: "Marketing Social & Impacto",
                color: "from-mustard to-orange",
              },
              {
                icon: Sparkles,
                title: "Celebrações e eventos literários",
                color: "from-teal to-primary",
              },
            ].map((service, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              ➡ Cada projeto é desenhado <span className="text-accent">sob medida</span>, a partir dos objetivos da marca.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 9 - Convite Final */}
      <section className="min-h-screen flex items-center py-20 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6 text-center">
          <img src={logo} alt="Pontes para Leitura" className="w-24 h-24 rounded-full mx-auto mb-8 shadow-xl" />

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Um convite para você e sua <span className="text-orange-light">equipe</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Não é sobre projetos prontos. É sobre cocriar algo relevante juntos.</p>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-10 max-w-xl mx-auto">
            <p className="text-lg text-white/80 mb-6">Se fizer sentido para sua agenda:</p>
            <ul className="space-y-3 text-left">
              {["podemos conversar brevemente", "entender prioridades para 2026", "explorar possibilidades de atuação conjunta"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-light flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-2xl font-display font-semibold text-orange-light mb-10">Impacto social construído em comunidade.</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511994066732?text=Olá! Gostaria de saber mais sobre o Pontes para Leitura."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleContactClick("WhatsApp");
                handleWhatsAppClick();
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>

            <a
              href="mailto:contato@pontesparaleitura.com.br?subject=Interesse em parceria - Pontes para Leitura"
              onClick={() => handleContactClick("Email")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-orange-dark text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>

            <a
              href="/#contato"
              onClick={() => handleContactClick("Contato")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-semibold rounded-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
