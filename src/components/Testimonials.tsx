import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Book, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Educadora",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      testimonial: "A leitura transformou minha vida e a de meus alunos. Cada livro é uma janela para um mundo novo, uma oportunidade de crescimento e empatia.",
      bookSuggestion: "O Pequeno Príncipe",
      bookAuthor: "Antoine de Saint-Exupéry",
    },
    {
      name: "João Santos",
      role: "Bibliotecário",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      testimonial: "Ver crianças descobrindo o prazer da leitura é a maior recompensa do meu trabalho. Livros constroem pontes entre gerações e culturas.",
      bookSuggestion: "A Bolsa Amarela",
      bookAuthor: "Lygia Bojunga",
    },
    {
      name: "Ana Costa",
      role: "Voluntária",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      testimonial: "Participar de projetos de leitura me mostrou o poder transformador da educação. Um livro pode mudar o destino de uma criança.",
      bookSuggestion: "Meu Pé de Laranja Lima",
      bookAuthor: "José Mauro de Vasconcelos",
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Depoimentos
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Vozes que inspiram a{" "}
            <span className="text-gradient-brand">leitura</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Histórias de pessoas que acreditam no poder transformador dos livros.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="bg-background rounded-3xl border border-border p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Photo */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <Quote className="w-10 h-10 text-primary/30 mb-4 mx-auto md:mx-0" />
                        
                        <blockquote className="text-lg md:text-xl text-foreground italic font-serif mb-6 leading-relaxed">
                          "{item.testimonial}"
                        </blockquote>

                        <div className="mb-6">
                          <p className="font-display font-bold text-foreground text-lg">
                            {item.name}
                          </p>
                          <p className="text-muted-foreground">{item.role}</p>
                        </div>

                        {/* Book Suggestion */}
                        <div className="inline-flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3">
                          <Book className="w-5 h-5 text-accent" />
                          <div className="text-left">
                            <p className="text-sm text-muted-foreground">Indicação de leitura:</p>
                            <p className="font-medium text-foreground">
                              {item.bookSuggestion}{" "}
                              <span className="text-muted-foreground font-normal">
                                — {item.bookAuthor}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Mobile navigation hint */}
          <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
            Deslize para ver mais depoimentos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
