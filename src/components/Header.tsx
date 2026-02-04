import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { analytics } from "@/lib/analytics";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#como-atuamos", label: "Como Atuamos" },
    { href: "#pilares", label: "Pilares" },
    { href: "#equipe", label: "Equipe" },
    { href: "#contato", label: "Contato" },
  ];

  const handleNavClick = (section: string) => {
    analytics.navClick(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pontes para Leitura"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">
              Pontes para Leitura
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="text-orange hover:text-orange-dark transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              analytics.mobileMenuToggle(!isOpen);
            }}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  handleNavClick(link.label);
                }}
                className="block py-3 text-orange hover:text-orange-dark transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
