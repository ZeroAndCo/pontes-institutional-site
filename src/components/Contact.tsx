import { Instagram, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Contato
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Vamos construir{" "}
              <span className="text-gradient-brand">pontes</span> juntos?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Se você quer participar das nossas ações, firmar parcerias ou saber mais 
              sobre como podemos trabalhar juntos, entre em contato conosco.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="https://www.instagram.com/pontes_para_leitura/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <p className="text-muted-foreground">@pontes_para_leitura</p>
                </div>
              </a>

              <a
                href="mailto:contato@pontesparaleitura.com.br"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-muted-foreground">contato@pontesparaleitura.com.br</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="p-3 rounded-lg bg-teal/10 text-teal">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Atuação</p>
                  <p className="text-muted-foreground">Todas as regiões do Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full p-8 md:p-12 gradient-hero rounded-3xl text-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Seja parte dessa transformação
              </h3>

              <p className="text-white/90 mb-8 leading-relaxed">
                Empresas, instituições e pessoas podem participar das nossas ações de 
                diferentes formas. Vamos conversar sobre como criar impacto através da leitura.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-light" />
                  <span className="text-white/90">Campanhas de doação de livros</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-light" />
                  <span className="text-white/90">Parcerias institucionais</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-light" />
                  <span className="text-white/90">Projetos para marcas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-light" />
                  <span className="text-white/90">Eventos e ativações</span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/pontes_para_leitura/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-dark transition-all hover:scale-105"
              >
                <Instagram size={20} />
                Siga nosso trabalho
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
