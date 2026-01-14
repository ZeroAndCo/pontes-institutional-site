import { BookOpen, Heart, Users } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Decorative wave patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-64"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-cream"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container-wide mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-cream/20 text-cream rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              Hub de Incentivo à Leitura
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Conectando pessoas e futuros através dos{" "}
              <span className="text-orange-light">livros</span>
            </h1>

            <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Uma plataforma de impacto social que leva livros e promove o hábito da leitura por todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-dark transition-all hover:scale-105 shadow-lg"
              >
                Conheça nosso trabalho
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-cream/10 text-cream border-2 border-cream/30 font-semibold rounded-lg hover:bg-cream/20 transition-all"
              >
                Entre em contato
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-light mb-1">
                  <BookOpen size={20} />
                  <span className="text-2xl md:text-3xl font-bold text-cream">115k+</span>
                </div>
                <p className="text-cream/70 text-sm">Livros distribuídos</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-light mb-1">
                  <Heart size={20} />
                  <span className="text-2xl md:text-3xl font-bold text-cream">590+</span>
                </div>
                <p className="text-cream/70 text-sm">Bibliotecas atendidas</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-light mb-1">
                  <Users size={20} />
                  <span className="text-2xl md:text-3xl font-bold text-cream">5</span>
                </div>
                <p className="text-cream/70 text-sm">Regiões do Brasil</p>
              </div>
            </div>
          </div>

          {/* Logo/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cream/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={logo}
                alt="Pontes para Leitura - Mãos unidas em torno de um livro"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(38, 45%, 96%)"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
