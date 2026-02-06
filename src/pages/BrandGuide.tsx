import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const colors = [
  { name: "Teal (Primary)", hsl: "187 50% 35%", hex: "#3D8A8A", cssVar: "--primary" },
  { name: "Teal Light", hsl: "187 40% 50%", hex: "#4DA6A6", cssVar: "--teal-light" },
  { name: "Teal Dark", hsl: "187 55% 25%", hex: "#1F5959", cssVar: "--teal-dark" },
  { name: "Orange (Accent)", hsl: "16 82% 54%", hex: "#E85D2C", cssVar: "--accent" },
  { name: "Orange Light", hsl: "16 75% 65%", hex: "#F08A66", cssVar: "--orange-light" },
  { name: "Orange Dark", hsl: "16 85% 45%", hex: "#C94A1F", cssVar: "--orange-dark" },
  { name: "Mustard", hsl: "42 75% 50%", hex: "#D4A017", cssVar: "--mustard" },
  { name: "Mustard Light", hsl: "42 65% 65%", hex: "#E0BC5C", cssVar: "--mustard-light" },
  { name: "Cream (Background)", hsl: "38 45% 96%", hex: "#F7F2E8", cssVar: "--cream" },
  { name: "Cream Dark", hsl: "38 35% 88%", hex: "#E8DFD1", cssVar: "--cream-dark" },
  { name: "Brown (Text)", hsl: "25 40% 12%", hex: "#2E1F10", cssVar: "--brown" },
  { name: "Brown Light", hsl: "25 30% 25%", hex: "#4A3D30", cssVar: "--brown-light" },
];

const gradients = [
  {
    name: "Gradient Hero",
    description: "Usado em seções principais e hero",
    css: "linear-gradient(135deg, #3D8A8A 0%, #1F5959 50%, #2E1F10 100%)",
  },
  {
    name: "Gradient Accent",
    description: "Usado em CTAs e destaques",
    css: "linear-gradient(135deg, #E85D2C 0%, #D4A017 100%)",
  },
  {
    name: "Gradient Warm",
    description: "Usado em fundos suaves",
    css: "linear-gradient(180deg, #F7F2E8 0%, #E8DFD1 100%)",
  },
];

const BrandGuide = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-4 right-4 print:hidden z-50">
        <Button onClick={handlePrint} className="gap-2">
          <Download className="w-4 h-4" />
          Salvar como PDF
        </Button>
      </div>

      {/* Page 1: Cover */}
      <section className="h-screen flex flex-col items-center justify-center p-12 page-break">
        <img src={logo} alt="Pontes para Leitura" className="w-48 h-48 object-contain mb-8 rounded-2xl" />
        <h1 className="text-5xl font-display font-bold text-brown mb-4 text-center">
          Pontes para Leitura
        </h1>
        <p className="text-2xl text-brown-light font-serif italic mb-8">
          Manual de Identidade Visual
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-teal to-orange rounded-full" />
      </section>

      {/* Page 2: Color Palette */}
      <section className="min-h-screen p-12 page-break bg-cream">
        <h2 className="text-4xl font-display font-bold text-brown mb-2">Paleta de Cores</h2>
        <p className="text-lg text-brown-light mb-8">Cores principais da marca em HSL e HEX</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div 
                className="h-24 w-full" 
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4">
                <h3 className="font-display font-semibold text-brown text-sm mb-2">
                  {color.name}
                </h3>
                <div className="space-y-1 text-xs text-brown-light font-mono">
                  <p><span className="font-semibold">HEX:</span> {color.hex}</p>
                  <p><span className="font-semibold">HSL:</span> {color.hsl}</p>
                  <p><span className="font-semibold">CSS:</span> var({color.cssVar})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Page 3: Gradients */}
      <section className="min-h-screen p-12 page-break">
        <h2 className="text-4xl font-display font-bold text-brown mb-2">Gradientes</h2>
        <p className="text-lg text-brown-light mb-8">Gradientes usados na identidade visual</p>
        
        <div className="space-y-8">
          {gradients.map((gradient) => (
            <div key={gradient.name} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div 
                className="h-32 w-full" 
                style={{ background: gradient.css }}
              />
              <div className="p-6">
                <h3 className="font-display font-bold text-brown text-xl mb-1">
                  {gradient.name}
                </h3>
                <p className="text-brown-light mb-3">{gradient.description}</p>
                <code className="text-xs bg-cream px-3 py-2 rounded-lg block font-mono text-brown-light break-all">
                  {gradient.css}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Page 4: Typography */}
      <section className="min-h-screen p-12 page-break bg-cream">
        <h2 className="text-4xl font-display font-bold text-brown mb-2">Tipografia</h2>
        <p className="text-lg text-brown-light mb-8">Fontes e estilos tipográficos</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Outfit */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-display font-bold text-teal mb-4">Outfit</h3>
            <p className="text-brown-light mb-6">
              Fonte principal para títulos e textos de destaque. Moderna, limpa e acessível.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Light (300)</p>
                <p className="font-display font-light text-3xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Regular (400)</p>
                <p className="font-display font-normal text-3xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Medium (500)</p>
                <p className="font-display font-medium text-3xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">SemiBold (600)</p>
                <p className="font-display font-semibold text-3xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Bold (700)</p>
                <p className="font-display font-bold text-3xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">ExtraBold (800)</p>
                <p className="font-display font-extrabold text-3xl text-brown">Pontes para Leitura</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <code className="text-xs bg-cream px-3 py-2 rounded-lg block font-mono text-brown-light">
                font-family: 'Outfit', system-ui, sans-serif;
              </code>
            </div>
          </div>

          {/* Merriweather */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-serif font-bold text-teal mb-4">Merriweather</h3>
            <p className="text-brown-light mb-6">
              Fonte serifada para citações, destaques e textos que precisam de elegância e tradição.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Regular (400)</p>
                <p className="font-serif font-normal text-2xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Bold (700)</p>
                <p className="font-serif font-bold text-2xl text-brown">Pontes para Leitura</p>
              </div>
              <div>
                <p className="text-xs text-brown-light uppercase tracking-wider mb-1">Italic (400)</p>
                <p className="font-serif italic text-2xl text-brown">"Transformando vidas através da leitura"</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <code className="text-xs bg-cream px-3 py-2 rounded-lg block font-mono text-brown-light">
                font-family: 'Merriweather', Georgia, serif;
              </code>
            </div>
          </div>
        </div>

        {/* Usage examples */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-display font-bold text-brown mb-6">Hierarquia Tipográfica</h3>
          <div className="space-y-4">
            <div className="flex items-baseline gap-4 pb-4 border-b border-border">
              <span className="text-xs text-brown-light w-16">H1</span>
              <h1 className="text-4xl font-display font-bold text-brown">Título Principal</h1>
            </div>
            <div className="flex items-baseline gap-4 pb-4 border-b border-border">
              <span className="text-xs text-brown-light w-16">H2</span>
              <h2 className="text-3xl font-display font-bold text-brown">Título de Seção</h2>
            </div>
            <div className="flex items-baseline gap-4 pb-4 border-b border-border">
              <span className="text-xs text-brown-light w-16">H3</span>
              <h3 className="text-2xl font-display font-semibold text-brown">Subtítulo</h3>
            </div>
            <div className="flex items-baseline gap-4 pb-4 border-b border-border">
              <span className="text-xs text-brown-light w-16">Body</span>
              <p className="text-base font-display text-brown">Texto de parágrafo com informações importantes.</p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-brown-light w-16">Quote</span>
              <p className="text-lg font-serif italic text-brown-light">"Citação ou texto de destaque elegante."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page 5: UI Elements */}
      <section className="min-h-screen p-12 page-break">
        <h2 className="text-4xl font-display font-bold text-brown mb-2">Elementos de UI</h2>
        <p className="text-lg text-brown-light mb-8">Botões, bordas e espaçamentos</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Buttons */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-display font-bold text-brown mb-6">Botões</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-teal text-white rounded-xl font-display font-medium">
                  Primary Button
                </button>
                <span className="text-sm text-brown-light">bg-primary</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-orange text-white rounded-xl font-display font-medium">
                  Accent Button
                </button>
                <span className="text-sm text-brown-light">bg-accent</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-secondary text-brown rounded-xl font-display font-medium">
                  Secondary Button
                </button>
                <span className="text-sm text-brown-light">bg-secondary</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 border-2 border-teal text-teal rounded-xl font-display font-medium">
                  Outline Button
                </button>
                <span className="text-sm text-brown-light">border-primary</span>
              </div>
            </div>
          </div>

          {/* Border Radius */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-display font-bold text-brown mb-6">Border Radius</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal rounded-sm" />
                <div>
                  <p className="font-display font-medium text-brown">Small</p>
                  <code className="text-xs text-brown-light font-mono">8px / rounded-sm</code>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal rounded-md" />
                <div>
                  <p className="font-display font-medium text-brown">Medium</p>
                  <code className="text-xs text-brown-light font-mono">10px / rounded-md</code>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal rounded-lg" />
                <div>
                  <p className="font-display font-medium text-brown">Large (Default)</p>
                  <code className="text-xs text-brown-light font-mono">12px / rounded-lg</code>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal rounded-xl" />
                <div>
                  <p className="font-display font-medium text-brown">Extra Large</p>
                  <code className="text-xs text-brown-light font-mono">16px / rounded-xl</code>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal rounded-full" />
                <div>
                  <p className="font-display font-medium text-brown">Full</p>
                  <code className="text-xs text-brown-light font-mono">50% / rounded-full</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shadows */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-display font-bold text-brown mb-6">Sombras</h3>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-cream rounded-xl shadow-sm" />
              <code className="text-xs text-brown-light font-mono">shadow-sm</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-cream rounded-xl shadow" />
              <code className="text-xs text-brown-light font-mono">shadow</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-cream rounded-xl shadow-md" />
              <code className="text-xs text-brown-light font-mono">shadow-md</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-cream rounded-xl shadow-lg" />
              <code className="text-xs text-brown-light font-mono">shadow-lg</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 bg-cream rounded-xl shadow-xl" />
              <code className="text-xs text-brown-light font-mono">shadow-xl</code>
            </div>
          </div>
        </div>
      </section>

      {/* Page 6: Brand Application */}
      <section className="min-h-screen p-12 page-break bg-cream">
        <h2 className="text-4xl font-display font-bold text-brown mb-2">Aplicação da Marca</h2>
        <p className="text-lg text-brown-light mb-8">Diretrizes de uso e melhores práticas</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-display font-bold text-teal mb-4">✓ Fazer</h3>
            <ul className="space-y-3 text-brown">
              <li className="flex items-start gap-2">
                <span className="text-teal">•</span>
                Usar teal como cor principal em CTAs importantes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">•</span>
                Usar orange para destaques e ações secundárias
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">•</span>
                Manter fundos em cream para leitura confortável
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">•</span>
                Usar Outfit para textos funcionais
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">•</span>
                Usar Merriweather para citações e destaque editorial
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">•</span>
                Aplicar gradientes em seções hero e banners
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-display font-bold text-orange mb-4">✗ Evitar</h3>
            <ul className="space-y-3 text-brown">
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Usar cores fora da paleta definida
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Texto orange sobre fundo teal (baixo contraste)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Fontes alternativas sem necessidade
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Gradientes em textos pequenos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Bordas muito arredondadas em elementos pequenos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Sombras muito intensas
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-gradient-to-r from-teal to-teal-dark rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-display font-bold mb-2">Pontes para Leitura</h3>
          <p className="font-serif italic opacity-90 mb-4">Transformando vidas através da leitura</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <span>contato@pontesparaleitura.org</span>
            <span>+55 11 99406-6732</span>
          </div>
        </div>
      </section>

      {/* Print styles */}
      <style>{`
        @media print {
          .page-break {
            page-break-after: always;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandGuide;
