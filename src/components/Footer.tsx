import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container-wide mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Mission */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Pontes para Leitura"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-display font-bold text-xl">Pontes para Leitura</h3>
              <p className="text-cream/70 text-sm">Hub de Incentivo à Leitura</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-cream/80">
            <a href="#sobre" className="hover:text-cream transition-colors">
              Sobre
            </a>
            <a href="#como-atuamos" className="hover:text-cream transition-colors">
              Como Atuamos
            </a>
            <a href="#pilares" className="hover:text-cream transition-colors">
              Pilares
            </a>
            <a href="#equipe" className="hover:text-cream transition-colors">
              Equipe
            </a>
            <a href="#contato" className="hover:text-cream transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Pontes para Leitura. Todos os direitos reservados.</p>
          
          <p className="flex items-center gap-1">
            Feito com <Heart size={14} className="text-accent" /> para transformar vidas através da leitura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
