import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Book, Quote } from "lucide-react";
import marciaPhoto from "@/assets/marcia_wada.jpeg";
import katiaPhoto from "@/assets/katia_chiaradia.jpeg";
import neliPhoto from "@/assets/neli_miotto.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Márcia Wada",
      role: "Curadora",
      photo: marciaPhoto,
      testimonial:
        "A leitura de livros literários pode modificar a forma de participação no mundo. Quando esse contato acontece de forma espontânea e significativa, a leitura se torna uma experiência marcante. Ela pode despertar o interesse, ampliar conhecimentos, toca sentimentos e ressignifica crenças, fortalecendo o sentimento de pertencimento e participação ativa na vida social. Assim aconteceu com os inúmeros adolescentes, jovens e educadores participantes de projeto de mediação de leitura de histórias",
      bookSuggestion: "Primavera",
      bookAuthor: "Carolina Moreyra e Odilon Moraes",
    },
    {
      name: "Kátia Chiaradia",
      role: "Curadora",
      photo: katiaPhoto,
      testimonial:
        "Ler é entrar num pacto de confiança grupal e mútua, portanto, um exercício social: o autor confia no leitor, e o leitor, que confia no texto, aceita se perder um pouco para descobrir (outros) caminhos. Isso me lembra, todos os dias, por que escolhi trabalhar com literatura para crianças e adolescentes: porque eles são um território de liberdade, de pensamento e de invenção do mundo.",
      bookSuggestion: "Passagem secreta",
      bookAuthor: "Mac Barnett",
    },
    {
      name: "Neli Miotto",
      role: "Curadora",
      photo: neliPhoto,
      testimonial:
        "Ter a leitura como missão de vida e o propósito de oferecer a outras pessoas a oportunidade de desfrutar, desvendar e descortinar histórias, enredos, personagens e novas possibilidades para a vida cotidiana enobrece ainda mais o viver.",
      bookSuggestion: "Princesa - A Historia Real Da Vida Das Mulheres Árabes por trás de seus negros véus",
      bookAuthor: "Jean P. Sasson",
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">Depoimentos</span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Vozes que inspiram a <span className="text-gradient-brand">leitura</span>
          </h2>

          <p className="text-lg text-muted-foreground">Histórias de pessoas que acreditam no poder transformador dos livros.</p>
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
                        <img src={item.photo} alt={item.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <Quote className="w-10 h-10 text-primary/30 mb-4 mx-auto md:mx-0" />

                        <blockquote className="text-lg md:text-xl text-foreground italic font-serif mb-6 leading-relaxed">"{item.testimonial}"</blockquote>

                        <div className="mb-6">
                          <p className="font-display font-bold text-foreground text-lg">{item.name}</p>
                          <p className="text-muted-foreground">{item.role}</p>
                        </div>

                        {/* Book Suggestion */}
                        <div className="inline-flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3">
                          <Book className="w-5 h-5 text-accent" />
                          <div className="text-left">
                            <p className="text-sm text-muted-foreground">Indicação de leitura:</p>
                            <p className="font-medium text-foreground">
                              {item.bookSuggestion} <span className="text-muted-foreground font-normal">— {item.bookAuthor}</span>
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
          <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">Deslize para ver mais depoimentos</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
