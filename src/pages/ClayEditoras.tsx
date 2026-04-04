import { useEffect } from "react";
import {
  BookOpen, Target, Lightbulb, Users, ArrowRight, Mail, MessageCircle, Phone,
  Sparkles, TrendingDown, Smartphone, BookX, Zap, Route, Trophy, Heart,
  Building2, ShoppingCart, Brain, Eye, Gift, BarChart3, Star, Check, X
} from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { analytics } from "@/lib/analytics";

const ClayEditoras = () => {
  useEffect(() => {
    analytics.pageView("Clay Editoras", "/editoras-parceiras-fundadoras");
    document.title = "CLAY — Editoras Parceiras Fundadoras | Pontes para Leitura";
    return () => { document.title = "Pontes para Leitura"; };
  }, []);

  const handleContactClick = (type: string) => {
    analytics.contactClick(type);
  };

  const handleWhatsAppClick = () => {
    analytics.whatsappClick("clay_editoras_cta");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Slide 1 - Cover */}
      <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" className="text-cream" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="container-narrow mx-auto px-6 text-center relative z-10">
          <img src={logo} alt="Pontes para Leitura" className="w-28 h-28 rounded-full mx-auto mb-6 shadow-2xl" />
          <p className="text-lg text-cream/70 font-medium tracking-widest uppercase mb-4">Apresentação Comercial</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream mb-6">CLAY</h1>
          <p className="text-xl md:text-2xl text-orange-light font-display font-semibold mb-4">Inteligência no Hábito da Leitura</p>
          <p className="text-lg text-cream/80 max-w-xl mx-auto">Convite para Editoras Parceiras Fundadoras</p>

          <div className="mt-12 animate-bounce">
            <ArrowRight className="w-8 h-8 text-cream/60 rotate-90 mx-auto" />
          </div>
        </div>
      </section>

      {/* Slide 2 - O Cenário */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">O Cenário</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O Brasil não tem apenas menos leitores. Tem milhões que nunca transformaram leitura em <span className="text-primary">hábito</span>.
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            A leitura segue sendo reconhecida como um valor importante — mas, na prática, ela tem perdido espaço na rotina, na atenção e nos hábitos cotidianos dos brasileiros.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: BookX, value: "27%", label: "leram um livro inteiro nos últimos 3 meses" },
              { icon: Smartphone, value: "81%", label: "ocupam tempo livre com internet e redes sociais" },
              { icon: BookOpen, value: "18%", label: "se declaram leitores de literatura" },
              { icon: TrendingDown, value: "20%", label: "usam tempo livre para ler livros" },
              { icon: Users, value: "1ª vez", label: "não leitores superam leitores no Brasil" },
            ].map((stat, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg text-foreground">
              A leitura ainda é valorizada. <strong>O que falta é um ambiente que ajude as pessoas a mantê-la viva no cotidiano.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Slide 3 - Oportunidade de Mercado */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Oportunidade de Mercado</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O ecossistema do livro segue <span className="text-accent">vivo e em transformação</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Novos formatos, comunidades e experiências estão reabrindo caminhos para a leitura. Isso cria uma oportunidade estratégica para editoras que desejam estar presentes não apenas na venda, mas também na formação do leitor contemporâneo.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { icon: Users, text: "Crescimento de clubes de leitura e comunidades leitoras" },
              { icon: Star, text: "Expansão de mediadores, curadores e creators literários" },
              { icon: Heart, text: "Fortalecimento de eventos, feiras e experiências em torno do livro" },
              { icon: Smartphone, text: "Crescimento de plataformas digitais, e-books e audiobooks" },
              { icon: Target, text: "Ampliação de projetos de leitura via leis de incentivo e impacto social" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border flex items-center gap-4 hover:border-accent/50 transition-colors">
                <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              O mercado não precisa apenas vender mais livros. Precisa <span className="text-accent">formar mais leitores ativos e recorrentes</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 4 - O Desafio Central */}
      <section className="min-h-screen flex items-center py-20 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">O Desafio Central</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Milhões querem ler mais. Mas não conseguem <span className="text-orange-light">sustentar</span> a leitura.
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-3xl">
            O desafio da leitura adulta hoje é comportamental. Entre intenção e prática, existe um vazio: muitas pessoas desejam ler mais, mas não conseguem transformar esse desejo em rotina e continuidade.
          </p>

          <h3 className="text-xl font-semibold text-orange-light mb-8">As três principais barreiras:</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Route, title: "Falta de constância", desc: "A leitura não se mantém com regularidade na rotina." },
              { icon: Zap, title: "Excesso de distrações", desc: "A atenção é disputada o tempo todo por telas, estímulos e urgências." },
              { icon: Heart, title: "Falta de pertencimento", desc: "Muitos adultos não se veem como leitores — ou não encontram apoio para permanecer." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <item.icon className="w-10 h-10 text-orange-light mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-display font-semibold text-orange-light">O problema não é querer ler. É conseguir continuar.</p>
          </div>
        </div>
      </section>

      {/* Slide 5 - A Solução */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">A Solução</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">CLAY</span> transforma leitura em hábito
          </h2>

          <p className="text-xl text-muted-foreground mb-4 max-w-3xl">Um produto digital desenhado para apoiar a construção da prática leitora na vida adulta.</p>

          <p className="text-lg text-foreground font-medium mb-8">O CLAY é um aplicativo/webapp que ajuda pessoas a começar, retomar e fortalecer o hábito da leitura, combinando:</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Route, text: "Trilhas guiadas de desenvolvimento do hábito" },
              { icon: Sparkles, text: "Rituais e ações práticas para a rotina real" },
              { icon: BarChart3, text: "Metas e acompanhamento de progresso" },
              { icon: Trophy, text: "Desafios e gamificação" },
              { icon: Users, text: "Comunidade, trocas e pertencimento" },
              { icon: BookOpen, text: "Recomendações inteligentes de livros" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-foreground text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-lg text-foreground font-medium">
              Mais do que recomendar leitura, o CLAY ajuda a <strong>criar contexto</strong> para que ela aconteça.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 6 - Como Funciona */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Como Funciona</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Do primeiro passo à <span className="text-accent">constância</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            O CLAY foi desenhado para apoiar o usuário em diferentes momentos da sua relação com a leitura.
          </p>

          <div className="space-y-6 mb-10">
            {[
              { num: "1", title: "Onboarding inteligente", desc: "O app identifica o momento, o perfil e os objetivos do usuário." },
              { num: "2", title: "Trilhas de hábito leitor", desc: "Caminhos guiados para desenvolver consistência e prazer na leitura." },
              { num: "3", title: "Rituais e ações", desc: "Pequenas intervenções ajudam a encaixar a leitura na rotina cotidiana." },
              { num: "4", title: "Progresso e gamificação", desc: "Metas, desafios, marcos e acompanhamento incentivam a continuidade." },
              { num: "5", title: "Comunidade e descoberta", desc: "Trocas, experiências e novas leituras fortalecem pertencimento e repertório." },
            ].map((step) => (
              <div key={step.num} className="bg-card p-6 rounded-xl border border-border flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <p className="text-xl font-display font-semibold text-foreground">
              O CLAY foi pensado para transformar <span className="text-accent">intenção em prática</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 7 - Oportunidade para Editoras */}
      <section className="min-h-screen flex items-center py-20 gradient-hero">
        <div className="container-narrow mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Oportunidade para Editoras</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
            O CLAY cria contexto para que livros sejam <span className="text-orange-light">desejados, lidos e comprados</span>
          </h2>

          <p className="text-lg text-cream/80 mb-12 max-w-3xl mx-auto">
            Ao apoiar o CLAY, a editora passa a fazer parte de uma jornada de leitura contínua — ocupando um espaço estratégico antes, durante e depois da compra.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              { icon: Users, title: "Formação de novos leitores", desc: "Amplia a base de pessoas que podem se relacionar com o livro de forma mais consistente." },
              { icon: BookOpen, title: "Recorrência e redescoberta", desc: "Cria oportunidades de novas leituras, novas portas de entrada e novas conexões com o catálogo." },
              { icon: Eye, title: "Presença de marca em contexto de valor", desc: "A editora passa a estar presente na jornada leitora — e não apenas no ponto de venda." },
              { icon: ShoppingCart, title: "Potencial de ativação comercial", desc: "Campanhas, combos, descontos e experiências podem conectar hábito + descoberta + compra." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-colors text-left">
                <item.icon className="w-10 h-10 text-orange-light mb-4" />
                <h3 className="text-lg font-semibold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/20 rounded-2xl p-8 border border-accent/30">
            <p className="text-xl font-display font-semibold text-cream">
              O CLAY aproxima editoras da <span className="text-orange-light">construção do leitor</span> — e não apenas da venda do livro.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 8 - Estrutura de Cotas */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Estrutura de Cotas</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Escolha como sua editora quer <span className="text-primary">participar</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Duas formas de presença institucional e ativação estratégica dentro dos primeiros 12 meses do projeto.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Fundadora */}
            <div className="bg-card p-8 rounded-2xl border-2 border-primary/30 relative">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">Parceira Fundadora</div>
              <h3 className="text-xl font-bold text-foreground mb-4">Presença institucional e participação estratégica na fase inicial</h3>
              <p className="text-sm text-muted-foreground mb-6">Ideal para editoras que desejam:</p>
              <ul className="space-y-3">
                {[
                  "Integrar o ecossistema desde o início",
                  "Fortalecer posicionamento institucional",
                  "Apoiar a formação de novos leitores",
                  "Construir presença em um novo ambiente de leitura",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Destaque */}
            <div className="bg-card p-8 rounded-2xl border-2 border-accent/30 relative">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">Parceira Destaque</div>
              <h3 className="text-xl font-bold text-foreground mb-4">Maior protagonismo, visibilidade e ativação de marca</h3>
              <p className="text-sm text-muted-foreground mb-6">Ideal para editoras que desejam:</p>
              <ul className="space-y-3">
                {[
                  "Ampliar presença e destaque no projeto",
                  "Ativar catálogo com mais intensidade",
                  "Participar de campanhas e experiências ampliadas",
                  "Ocupar posição de maior visibilidade na jornada do usuário",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 text-center">
            <p className="text-foreground">
              As cotas são <strong>limitadas</strong> e válidas para o ciclo fundador de 12 meses do CLAY.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 9 - Contrapartidas */}
      <section className="min-h-screen flex items-center py-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Contrapartidas Premium</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Onde sua editora <span className="text-accent">vive</span> dentro do CLAY
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Uma presença que combina posicionamento, descoberta, relacionamento e ativação ao longo da jornada do usuário.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "1",
                icon: Building2,
                title: "Presença Institucional",
                subtitle: "Sua marca como parte da construção do projeto",
                items: [
                  "Reconhecimento como editora parceira do ciclo fundador",
                  "Presença institucional em materiais e comunicação",
                  "Associação à inovação, leitura, cultura e impacto social",
                ],
              },
              {
                num: "2",
                icon: Route,
                title: "Presença na Jornada do Leitor",
                subtitle: "Sua marca conectada à experiência, não ao ponto de venda",
                items: [
                  "Presença em campanhas temáticas e ativações editoriais",
                  "Integração com jornadas, trilhas ou momentos de descoberta",
                  "Conexão com experiências de leitura e comunidade",
                ],
              },
              {
                num: "3",
                icon: Gift,
                title: "Catálogo, Benefícios & Conversão",
                subtitle: "O livro em circulação dentro de um ambiente de engajamento contínuo",
                items: [
                  "Oferta de livros com benefícios para assinantes",
                  "Campanhas conjuntas de marketing digital",
                  "Ativações de descoberta, recorrência e redescoberta de catálogo",
                ],
              },
              {
                num: "4",
                icon: Brain,
                title: "Aprendizado & Inovação",
                subtitle: "Nova camada de inteligência sobre comportamento leitor",
                items: [
                  "Conexão com aprendizados do projeto ao longo do ciclo",
                  "Proximidade com uma solução em construção e validação",
                  "Participação em uma iniciativa com potencial de escala",
                ],
              },
            ].map((block) => (
              <div key={block.num} className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{block.num}</div>
                  <block.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{block.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{block.subtitle}</p>
                <ul className="space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Sparkles className="w-3 h-3 text-accent flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 10 - Investimento */}
      <section className="min-h-screen flex items-center py-20 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">Investimento</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Convite para participação como <span className="text-orange-light">Parceira Fundadora</span>
          </h2>

          <p className="text-lg text-white/80 mb-12 max-w-3xl">
            Uma cota institucional para 12 meses de presença estratégica no CLAY.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-sm font-medium text-orange-light mb-2">🟢 Editora Parceira Fundadora</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">R$ 12.000</div>
              <p className="text-white/60 text-sm mb-6">por ano</p>
              <p className="text-white/80 text-sm">Presença institucional + participação estratégica no ecossistema do CLAY</p>
            </div>

            <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-accent/30">
              <div className="text-sm font-medium text-orange-light mb-2">🔵 Editora Parceira Destaque</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">R$ 18.000</div>
              <p className="text-white/60 text-sm mb-6">por ano</p>
              <p className="text-white/80 text-sm">Maior protagonismo, visibilidade e ativação ao longo do ciclo fundador</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-3 gap-0">
              <div className="p-4 font-semibold text-white/60 text-sm border-b border-white/10">Categoria</div>
              <div className="p-4 font-semibold text-orange-light text-sm border-b border-white/10 text-center">Fundadora</div>
              <div className="p-4 font-semibold text-orange-light text-sm border-b border-white/10 text-center">Destaque</div>

              {[
                { cat: "Presença como parceira fundadora", fund: "✓", dest: "Com maior destaque" },
                { cat: "Integração em campanhas e ativações", fund: "Presença base", dest: "Presença ampliada" },
                { cat: "Benefícios para assinantes", fund: "✓", dest: "Com maior recorrência" },
                { cat: "Participação em experiências especiais", fund: "Selecionada", dest: "Maior prioridade" },
                { cat: "Visibilidade no ecossistema", fund: "Institucional", dest: "Ampliada" },
                { cat: "Conexão com aprendizados e evolução", fund: "✓", dest: "✓" },
              ].map((row, i) => (
                <>
                  <div key={`cat-${i}`} className="p-4 text-sm text-white/80 border-b border-white/5">{row.cat}</div>
                  <div key={`fund-${i}`} className="p-4 text-sm text-white/70 border-b border-white/5 text-center">{row.fund}</div>
                  <div key={`dest-${i}`} className="p-4 text-sm text-white/70 border-b border-white/5 text-center">{row.dest}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide 11 - Impacto */}
      <section className="min-h-screen flex items-center py-20 bg-cream">
        <div className="container-narrow mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Impacto</span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ao apoiar o CLAY, sua editora ajuda a <span className="text-primary">formar leitores</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Um projeto com potencial de impacto cultural, social e mercadológico. O CLAY nasce para fortalecer a relação entre pessoas e leitura.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Ampliar a constância da leitura na vida adulta",
              "Reaproximar pessoas do livro",
              "Fortalecer repertório, bem-estar e desenvolvimento pessoal",
              "Criar novas rotas de descoberta, pertencimento e permanência leitora",
              "Contribuir para o fortalecimento do ecossistema do livro no Brasil",
            ].map((item, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-teal-dark rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-xl font-display font-semibold text-foreground">
              Formar leitores é também <span className="text-primary">fortalecer o futuro do mercado editorial</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 12 - CTA Final */}
      <section className="min-h-screen flex items-center py-20 gradient-hero">
        <div className="container-narrow mx-auto px-6 text-center">
          <img src={logo} alt="Pontes para Leitura" className="w-24 h-24 rounded-full mx-auto mb-8 shadow-xl" />

          <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-4">
            Vamos construir essa nova jornada de leitura <span className="text-orange-light">juntos</span>?
          </h2>

          <p className="text-xl text-cream/90 mb-4 max-w-2xl mx-auto">
            Estamos abrindo as primeiras cotas para editoras parceiras fundadoras do CLAY.
          </p>

          <p className="text-lg text-cream/70 mb-10 max-w-2xl mx-auto">
            Será um prazer apresentar melhor o projeto, compartilhar o modelo de parceria e construir com sua editora uma presença estratégica dentro desta nova plataforma de formação leitora.
          </p>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-10 max-w-xl mx-auto">
            <p className="text-2xl font-display font-semibold text-orange-light mb-2">CLAY + Editoras Parceiras</p>
            <p className="text-cream/80">Uma parceria para formar leitores, fortalecer catálogos e ampliar impacto.</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511994066732?text=Olá! Gostaria de saber mais sobre o CLAY e as cotas de Editora Parceira Fundadora."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { handleContactClick("WhatsApp"); handleWhatsAppClick(); }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>

            <a
              href="mailto:contato@pontesparaleitura.com.br?subject=Interesse em parceria CLAY - Editora Parceira Fundadora"
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

export default ClayEditoras;
