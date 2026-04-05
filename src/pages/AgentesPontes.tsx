import { useEffect } from "react";
import {
  BookOpen, Target, Lightbulb, Users, ArrowRight, Mail, MessageCircle, Phone,
  Sparkles, Heart, Building2, Brain, Eye, MapPin, Shield, BarChart3, Star,
  Check, GraduationCap, TreePine, Ear, RefreshCw, Zap, Layers, UserCheck,
  Globe, School, Handshake, FileText, Camera, Award, TrendingUp, Instagram, Linkedin
} from "lucide-react";
import adrianePhoto from "@/assets/adriane.jpeg";
import nelmaPhoto from "@/assets/nelma.jpeg";
import logo from "@/assets/logo.jpeg";
import { analytics } from "@/lib/analytics";

const AgentesPontes = () => {
  useEffect(() => {
    analytics.pageView("Agentes Pontes", "/agentes-pontes");
    document.title = "Agentes Pontes — Formação de Lideranças Leitoras | Pontes para Leitura";
    return () => { document.title = "Pontes para Leitura"; };
  }, []);

  const handleContactClick = (type: string) => {
    analytics.contactClick(type);
  };

  const handleWhatsAppClick = () => {
    analytics.whatsappClick("agentes_pontes_cta");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1 - Cover */}
      <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" className="text-cream" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="container-narrow mx-auto px-6 text-center relative z-10">
          <img src={logo} alt="Pontes para Leitura" className="w-28 h-28 rounded-full mx-auto mb-6 shadow-2xl" />
          <p className="text-lg text-cream/70 font-medium tracking-widest uppercase mb-4">Apresentação Comercial</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream mb-6">Agentes Pontes</h1>
          <p className="text-xl md:text-2xl text-orange-light font-display font-semibold mb-4">Formação de lideranças leitoras para ativação territorial e impacto social</p>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">Uma metodologia para formar pessoas capazes de mobilizar leitura, vínculo, pertencimento e transformação em seus territórios.</p>

          <div className="mt-12 animate-bounce">
            <ArrowRight className="w-8 h-8 text-cream/60 rotate-90 mx-auto" />
          </div>
        </div>
      </section>

      {/* Section 2 - O Que São Agentes Pontes */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">O Conceito</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O que são <span className="text-primary">Agentes Pontes</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Territórios não se transformam apenas com acesso. Eles se transformam quando pessoas locais se tornam pontes de mudança. O que realmente gera transformação é formar pessoas capazes de mobilizar leitura, escuta, repertório, pertencimento e convivência de forma contínua dentro das comunidades.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: Sparkles, text: "Mais do que ação pontual" },
              { icon: BookOpen, text: "Mais do que distribuição de livros" },
              { icon: GraduationCap, text: "Mais do que atividade educativa" },
              { icon: Target, text: "Formação de capacidade local de transformação" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border flex items-center gap-4 hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg text-foreground">
              Impacto real acontece quando o <strong>território passa a sustentar a mudança</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - O Desafio */}
      <section className="min-h-screen flex items-center py-20 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">O Desafio</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            O desafio não é apenas acesso ao livro. É a ausência de <span className="text-orange-light">mediação, vínculo e continuidade</span>.
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-3xl">
            Em muitos territórios, a leitura ainda não ocupa um lugar vivo no cotidiano. O que falta, muitas vezes, não é apenas material. Falta a construção de um ecossistema leitor sustentado por pessoas, espaços, vínculos e experiências significativas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: BookOpen, text: "Acesso limitado a livros e acervos relevantes" },
              { icon: UserCheck, text: "Ausência de mediação qualificada" },
              { icon: RefreshCw, text: "Poucas experiências literárias contínuas" },
              { icon: MapPin, text: "Baixa ativação de espaços de leitura" },
              { icon: Heart, text: "Fragilidade de vínculo entre leitura, comunidade e pertencimento" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <item.icon className="w-10 h-10 text-orange-light mb-4" />
                <p className="text-white/90 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-display font-semibold text-orange-light">Sem mediação, o livro chega. Mas nem sempre permanece.</p>
          </div>
        </div>
      </section>

      {/* Section 4 - A Tese */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">A Tese</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Mais do que formar leitores, o Agentes Pontes forma <span className="text-accent">capacidade local de transformação</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            O projeto nasce para formar pessoas que atuem como Agentes Pontes: mediadores locais capazes de conectar leitura, escuta, repertório, pertencimento e mobilização comunitária.
          </p>

          <p className="text-foreground font-medium mb-8">A proposta entende a leitura não apenas como prática educacional, mas como ferramenta de:</p>

          <div className="space-y-4 mb-10">
            {[
              { icon: Brain, text: "Desenvolvimento humano" },
              { icon: Users, text: "Fortalecimento comunitário" },
              { icon: Lightbulb, text: "Ampliação de repertório cultural" },
              { icon: MapPin, text: "Ativação territorial" },
              { icon: TrendingUp, text: "Transformação social com continuidade" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border flex items-center gap-4 hover:border-accent/50 transition-colors">
                <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              A leitura se torna estratégica quando gera <span className="text-accent">presença, vínculo e futuro</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - O Programa */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">O Programa</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            O que é o <span className="text-primary">Agentes Pontes</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-4 max-w-3xl">Uma jornada formativa que transforma leitura em presença ativa no território.</p>
          <p className="text-foreground font-medium mb-8 max-w-3xl">O Agentes Pontes é um programa estruturado de formação e ativação prática que prepara pessoas para atuar como multiplicadoras de experiências leitoras com intencionalidade, escuta e vínculo.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Handshake, text: "Articulação com a comunidade" },
              { icon: Star, text: "Evento de abertura e encerramento" },
              { icon: GraduationCap, text: "Formação de Agentes Pontes — 20h" },
              { icon: MapPin, text: "Mapeamento de oportunidades de aplicação" },
              { icon: Target, text: "Aplicação orientada por 60 dias" },
              { icon: Eye, text: "Acompanhamento e monitoria semanal" },
              { icon: BookOpen, text: "Curadoria de acervo e repertório" },
              { icon: BarChart3, text: "Acompanhamento de resultados e devolutiva" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-foreground text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg text-foreground font-medium">
              A leitura se torna viva quando encontra <strong>vínculo, mediação e pertencimento</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Pilar Conceitual */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Pilar Conceitual</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Transformação real começa com <span className="text-accent">escuta, presença e ação com sentido</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Uma metodologia inspirada em abordagens contemporâneas de transformação social, como a Teoria U. Em vez de levar respostas prontas, o projeto forma pessoas para perceber melhor seus contextos e construir novas possibilidades a partir deles.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-8">3 movimentos da metodologia</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Ear, num: "1", title: "Escutar o território", desc: "Compreender relações, necessidades, repertórios e potências locais." },
              { icon: RefreshCw, num: "2", title: "Reposicionar a atuação", desc: "Ampliar escuta, presença, repertório e capacidade de mediação." },
              { icon: Zap, num: "3", title: "Ativar e experimentar", desc: "Transformar reflexão em prática por meio de ações leitoras e experiências locais." },
            ].map((item) => (
              <div key={item.num} className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">{item.num}</div>
                <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              Não se trata de aplicar uma fórmula. Trata-se de formar pessoas capazes de <span className="text-accent">criar novas respostas no território</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Como Funciona */}
      <section className="min-h-screen flex items-center py-20 gradient-hero">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Como Funciona</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
            Uma metodologia desenhada para gerar <span className="text-orange-light">adesão, continuidade e impacto</span>
          </h2>

          <p className="text-lg text-cream/80 mb-10 max-w-3xl">
            O programa é implementado em etapas que garantem consistência metodológica, aderência territorial e possibilidade real de continuidade após a formação.
          </p>

          <div className="space-y-6 mb-10">
            {[
              {
                num: "1", title: "Escuta e diagnóstico territorial",
                items: ["Encontros e rodas de leitura", "Ativações locais", "Leitura de contexto", "Mapeamento do território", "Identificação de necessidades e potências"],
              },
              {
                num: "2", title: "Formação dos Agentes Pontes",
                items: ["Mediação de leitura", "Facilitação e vínculo", "Repertório cultural", "Leitura como prática social"],
              },
              {
                num: "3", title: "Aplicação prática",
                items: ["Ações orientadas no território", "Experiências leitoras com a comunidade", "Ativação de espaços e públicos"],
              },
              {
                num: "4", title: "Acompanhamento e consolidação",
                items: ["Monitoria semanal", "Registro das práticas", "Acompanhamento de resultados", "Sistematização de aprendizados"],
              },
            ].map((step) => (
              <div key={step.num} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-light/20 rounded-full flex items-center justify-center text-orange-light font-bold text-xl flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-cream mb-3">{step.title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-cream/80">
                          <Check className="w-4 h-4 text-orange-light flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/20 rounded-2xl p-6 text-center border border-accent/30">
            <p className="text-xl font-display font-semibold text-cream">
              Um projeto com método, gestão, profundidade relacional e <span className="text-orange-light">intencionalidade social</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - Jornada de Transformação */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Jornada de Transformação</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Toda transformação territorial começa quando alguém se reconhece como <span className="text-primary">ponte</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            O Agentes Pontes parte de uma convicção simples: grandes transformações comunitárias frequentemente começam com pessoas comuns que recebem repertório, método e confiança para agir.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                phase: "Antes",
                color: "bg-primary/10 border-primary/30",
                accent: "text-primary",
                desc: "Uma educadora, liderança local, agente comunitário, professora, bibliotecária ou mediadora deseja fazer mais, mas nem sempre encontra repertório, apoio ou metodologia.",
              },
              {
                phase: "Durante",
                color: "bg-accent/10 border-accent/30",
                accent: "text-accent",
                desc: "Ao longo da formação, essa pessoa amplia sua escuta, fortalece sua prática e se conecta a novas formas de mobilizar leitura e convivência.",
              },
              {
                phase: "Depois",
                color: "bg-primary/10 border-primary/30",
                accent: "text-primary",
                desc: "Ela passa a criar experiências que aproximam pessoas, ativam espaços e fortalecem vínculos no território.",
              },
            ].map((item) => (
              <div key={item.phase} className={`p-8 rounded-2xl border-2 ${item.color}`}>
                <h3 className={`text-2xl font-display font-bold ${item.accent} mb-4`}>{item.phase}</h3>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg text-foreground font-medium">
              Quando uma pessoa se forma, uma prática muda. Quando uma prática muda, <strong>um território começa a se mover</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 - Públicos e Territórios */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Públicos e Territórios</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Um programa adaptável a diferentes <span className="text-accent">contextos, públicos e realidades</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            O Agentes Pontes pode ser implementado em diferentes formatos e territórios, respeitando características sociais, institucionais e comunitárias de cada contexto.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Users, text: "Crianças" },
              { icon: Users, text: "Adolescentes" },
              { icon: Users, text: "Jovens" },
              { icon: Heart, text: "Famílias" },
              { icon: GraduationCap, text: "Educadores" },
              { icon: Shield, text: "Lideranças comunitárias" },
              { icon: Building2, text: "Organizações sociais" },
              { icon: BookOpen, text: "Bibliotecas comunitárias" },
              { icon: School, text: "Escolas e espaços educativos" },
              { icon: Globe, text: "Espaços públicos e coletivos de convivência" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-4 rounded-xl border border-border flex items-center gap-3 hover:border-accent/50 transition-colors">
                <item.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              A leitura se torna ponto de encontro entre <span className="text-accent">educação, cultura, cidadania e pertencimento</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10 - Impacto Social */}
      <section className="min-h-screen flex items-center py-20 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Impacto Social</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            O impacto do programa aparece nas <span className="text-orange-light">pessoas, nas relações e no território</span>
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-3xl">
            O Agentes Pontes foi desenhado para gerar transformação em múltiplas camadas, articulando desenvolvimento humano, fortalecimento comunitário e ativação cultural.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                num: "1", title: "No indivíduo",
                items: ["Ampliação de repertório", "Fortalecimento da escuta e da expressão", "Aumento da autoconfiança para mediar e mobilizar"],
              },
              {
                num: "2", title: "Nas relações",
                items: ["Fortalecimento de vínculos", "Maior convivência e troca entre participantes", "Ampliação do senso de pertencimento"],
              },
              {
                num: "3", title: "Nos espaços",
                items: ["Ativação de bibliotecas, escolas e espaços coletivos", "Maior circulação de leitura", "Criação de ambientes mais acolhedores e inspiradores"],
              },
              {
                num: "4", title: "No território",
                items: ["Fortalecimento de redes locais", "Ampliação de capital cultural", "Geração de práticas que permanecem após o projeto"],
              },
            ].map((layer) => (
              <div key={layer.num} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-light/20 rounded-full flex items-center justify-center text-orange-light font-bold text-sm flex-shrink-0">{layer.num}</div>
                  <h3 className="text-lg font-bold text-cream">{layer.title}</h3>
                </div>
                <ul className="space-y-2">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <Sparkles className="w-3 h-3 text-orange-light flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-display font-semibold text-orange-light">
              Leitura não é apenas conteúdo. É infraestrutura de desenvolvimento humano e social.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11 - Avaliação e Trackeamento */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Avaliação e Trackeamento</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Impacto social não pode ser apenas percebido. Precisa ser <span className="text-primary">acompanhado e evidenciado</span>.
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            O projeto prevê um sistema de acompanhamento que permite registrar participação, práticas realizadas, transformações percebidas e evidências de impacto no território.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                num: "1", title: "Participação",
                items: ["Número de agentes formados", "Taxa de adesão e conclusão", "Presença nos encontros"],
              },
              {
                num: "2", title: "Ativação",
                items: ["Número de mediações realizadas", "Frequência das ações", "Quantidade de pessoas alcançadas"],
              },
              {
                num: "3", title: "Transformação",
                items: ["Fortalecimento do vínculo com a leitura", "Percepção de pertencimento", "Autoconfiança para mediação"],
              },
              {
                num: "4", title: "Território",
                items: ["Ativação de espaços", "Fortalecimento de redes locais", "Potencial de continuidade pós-programa"],
              },
            ].map((dim) => (
              <div key={dim.num} className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{dim.num}</div>
                  <h3 className="text-lg font-bold text-foreground">{dim.title}</h3>
                </div>
                <ul className="space-y-2">
                  {dim.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              Mais do que executar ações, o projeto gera <span className="text-primary">evidências de transformação</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 12 - Por Que Investir */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Por Que Investir</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Investir em Agentes Pontes é investir em <span className="text-accent">transformação com legado</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Ao apoiar o programa, sua organização se associa a uma iniciativa que combina educação, cultura, desenvolvimento territorial e impacto social mensurável. É um investimento em pessoas, comunidades e futuros possíveis.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Shield, text: "Fortalecimento da agenda ESG e de impacto social" },
              { icon: Globe, text: "Conexão legítima com territórios e comunidades" },
              { icon: Award, text: "Fortalecimento da reputação institucional" },
              { icon: Star, text: "Associação da marca a uma causa relevante e contemporânea" },
              { icon: FileText, text: "Narrativa consistente de legado e transformação" },
              { icon: Users, text: "Potencial de engajamento interno e externo" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border hover:border-accent/50 transition-colors">
                <item.icon className="w-8 h-8 text-accent mb-3" />
                <p className="text-foreground text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              Não é apenas apoio a um projeto. É investimento em <span className="text-accent">capacidade humana e transformação sustentável</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 13 - Perfis de Investidor */}
      <section className="min-h-screen flex items-center py-20 gradient-hero">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Perfis de Investidor</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
            Uma iniciativa aderente a diferentes <span className="text-orange-light">estratégias de investimento</span>
          </h2>

          <p className="text-lg text-cream/80 mb-10 max-w-3xl">
            O Agentes Pontes pode ser adaptado para diferentes perfis de apoiadores, mantendo coerência metodológica e personalização de implementação.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Empresas",
                icon: Building2,
                items: ["Agenda ESG e investimento social privado", "Relacionamento com território e stakeholders", "Fortalecimento reputacional e legado local"],
              },
              {
                title: "Institutos e Fundações",
                icon: Layers,
                items: ["Fortalecimento de capacidades locais", "Investimento com potencial de continuidade", "Impacto social rastreável e narrativas de transformação"],
              },
              {
                title: "Escolas e Colégios Particulares",
                icon: School,
                items: ["Extensão comunitária", "Responsabilidade social e formação cidadã", "Conexão entre educação, leitura e território"],
              },
            ].map((profile, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <profile.icon className="w-10 h-10 text-orange-light mb-4" />
                <h3 className="text-xl font-bold text-cream mb-4">{profile.title}</h3>
                <ul className="space-y-3">
                  {profile.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-cream/80">
                      <Check className="w-4 h-4 text-orange-light flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-accent/20 rounded-2xl p-6 text-center border border-accent/30">
            <p className="text-xl font-display font-semibold text-cream">
              O projeto se adapta ao investidor sem perder <span className="text-orange-light">profundidade, consistência e propósito</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14 - Contrapartidas */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Contrapartidas e Entregáveis</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Visibilidade, reputação e <span className="text-primary">conexão qualificada</span> com impacto
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Além da execução do programa, os apoiadores contam com contrapartidas institucionais e de comunicação que fortalecem a visibilidade da parceria e a narrativa de impacto gerado.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Building2, text: "Presença institucional nos materiais do projeto" },
              { icon: Star, text: "Associação da marca à iniciativa" },
              { icon: Handshake, text: "Participação em eventos e ativações" },
              { icon: Camera, text: "Registros fotográficos e audiovisuais" },
              { icon: FileText, text: "Conteúdo para comunicação interna e externa" },
              { icon: BarChart3, text: "Relatórios de impacto e prestação de contas" },
              { icon: Award, text: "Materiais de divulgação e reconhecimento institucional" },
              { icon: Users, text: "Oportunidades de relacionamento com stakeholders" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border flex items-center gap-4 hover:border-primary/50 transition-colors">
                <item.icon className="w-7 h-7 text-primary flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              Impacto social com <span className="text-primary">visibilidade qualificada, credibilidade e lastro</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 15 - Diferenciais */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Diferenciais</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O que torna o Agentes Pontes <span className="text-accent">único</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            O programa se diferencia por unir leitura, formação humana, ativação territorial e acompanhamento de impacto em uma mesma jornada estruturada.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Trabalha leitura como ferramenta de transformação social",
              "Vai além da doação pontual de livros",
              "Forma capacidade local e não apenas participação momentânea",
              "Une vínculo, repertório e aplicação prática",
              "Gera indicadores e narrativa de impacto",
              "Conecta empresa, território e propósito de forma concreta",
              "Pode ser customizado para diferentes contextos",
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border-l-4 border-accent">
            <p className="text-xl font-display font-semibold text-foreground">
              Não é uma ação isolada. É uma jornada de ativação territorial com <span className="text-accent">potencial de permanência</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 16 - CTA Final */}
      <section className="min-h-screen flex items-center py-20 gradient-hero">
        <div className="container-narrow mx-auto px-6 text-center">
          <img src={logo} alt="Pontes para Leitura" className="w-24 h-24 rounded-full mx-auto mb-8 shadow-xl" />

          <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-4">
            Toda comunidade merece mais do que acesso. Merece pontes para <span className="text-orange-light">imaginar, ler e transformar</span> seu futuro.
          </h2>

          <p className="text-xl text-cream/90 mb-4 max-w-2xl mx-auto">
            Convidamos sua organização a fazer parte de uma iniciativa que forma pessoas, fortalece territórios e gera impacto social com profundidade, continuidade e legado.
          </p>

          <p className="text-lg text-cream/70 mb-10 max-w-2xl mx-auto">
            Investir em leitura é importante. Investir em quem faz a leitura ganhar vida no território é ainda mais transformador.
          </p>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-10 max-w-xl mx-auto">
            <p className="text-2xl font-display font-semibold text-orange-light mb-2">Vamos construir esse legado juntos.</p>
            <p className="text-cream/80">Uma parceria para formar lideranças, fortalecer territórios e ampliar impacto.</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511994066732?text=Olá! Gostaria de saber mais sobre o programa Agentes Pontes."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { handleContactClick("WhatsApp"); handleWhatsAppClick(); }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>

            <a
              href="mailto:contato@pontesparaleitura.com.br?subject=Interesse no programa Agentes Pontes"
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

export default AgentesPontes;
