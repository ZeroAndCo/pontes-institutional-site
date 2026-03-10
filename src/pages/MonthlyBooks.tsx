import { useState, useEffect } from "react";
import { BookOpen, ShoppingCart, User, Lock, Sparkles, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import booksData from "@/data/monthly-books.json";
import { analytics, trackEvent } from "@/lib/analytics";

const PASSWORD = "pontes2026";
const SESSION_KEY = "pontes-livros-auth";

interface Book {
  title: string;
  author: string;
  publisher: string;
  description: string;
  suggestedBy: string;
  suggestionReason: string;
  amazonUrl: string;
  coverUrl?: string;
  categories?: string[];
}

interface MonthEntry {
  month: string;
  label: string;
  theme?: string;
  themeDescription?: string;
  books: Book[];
}

function getCurrentBrazilMonth(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;

  if (!year || !month) {
    throw new Error("Unable to determine current month for Brazil timezone.");
  }

  return `${year}-${month}`;
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
      <Tag className="h-3 w-3" />
      {label}
    </span>
  );
}

function ThemeCard({ theme, description }: { theme: string; description: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-mustard/10 border border-primary/15 p-6 mb-8">
      <div className="absolute top-3 right-3 text-accent/20">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <h3 className="font-display text-lg font-bold text-primary">Tema: {theme}</h3>
      </div>
      <p className="text-sm leading-relaxed text-foreground/75 max-w-2xl">{description}</p>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  const hasLink = book.amazonUrl.length > 0;

  const handleBuyClick = () => {
    analytics.externalLink(book.amazonUrl, `Comprar: ${book.title}`);
  };

  return (
    <Card className="overflow-hidden border-border/60 bg-card hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          {/* Book cover */}
          <div className="shrink-0 w-24 h-36 rounded-lg overflow-hidden bg-secondary shadow-md group-hover:shadow-lg transition-shadow ring-1 ring-border/30">
            {book.coverUrl ? (
              <img src={book.coverUrl} alt={`Capa: ${book.title}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary/50" />
              </div>
            )}
          </div>
          <div className="min-w-0 pt-1">
            <CardTitle className="text-lg leading-snug">{book.title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              {book.author} · {book.publisher}
            </p>
            {book.categories && book.categories.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {book.categories.map((cat) => (
                  <CategoryBadge key={cat} label={cat} />
                ))}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-foreground/85">{book.description}</p>

        <div className="rounded-lg bg-secondary/60 border border-border/40 p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1">
            <User className="h-3.5 w-3.5" />
            Sugerido por {book.suggestedBy}
          </div>
          <p className="text-sm italic text-foreground/75">"{book.suggestionReason}"</p>
        </div>

        {hasLink ? (
          <Button asChild className="w-full gap-2 gradient-accent border-0 text-primary-foreground hover:opacity-90">
            <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" onClick={handleBuyClick}>
              <ShoppingCart className="h-4 w-4" />
              Comprar na Amazon
            </a>
          </Button>
        ) : (
          <Button disabled className="w-full gap-2">
            <ShoppingCart className="h-4 w-4" />
            Em breve
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      trackEvent("password_unlock", { page: "livros-do-mes" });
      onUnlock();
    } else {
      trackEvent("password_failed", { page: "livros-do-mes" });
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm border-primary/20 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full gradient-hero">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-xl">Área restrita</CardTitle>
          <p className="text-sm text-muted-foreground">Digite a senha para acessar as sugestões de leitura.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={error ? "border-destructive" : ""}
              autoFocus
            />
            {error && <p className="text-xs text-destructive">Senha incorreta.</p>}
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function MonthlyBooks() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    document.title = "Livros do Mês | Pontes para Leitura";
    analytics.pageView("Livros do Mês", "/livros-do-mes");
    return () => {
      document.title = "Pontes para Leitura | Hub de Incentivo à Leitura";
    };
  }, []);

  if (!authenticated) {
    return <PasswordGate onUnlock={() => setAuthenticated(true)} />;
  }

  const data = booksData as MonthEntry[];
  const currentMonth = getCurrentBrazilMonth();
  const sorted = data.filter((entry) => entry.month <= currentMonth).sort((a, b) => b.month.localeCompare(a.month));
  const [current, ...past] = sorted;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero banner */}
      <section className="gradient-hero text-primary-foreground pt-28 pb-14 md:pt-32 md:pb-20 px-6 wave-divider">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl text-primary-foreground">Livros do Mês</h1>
          </div>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">Sugestões de leitura selecionadas com carinho pela equipe e colaboradores do Pontes para Leitura.</p>
        </div>
      </section>

      {/* Current month */}
      <main className="flex-1">
        {current ? (
          <section className="section-padding pb-8 md:pb-12">
            <div className="container-narrow">
              <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                <span className="inline-block w-1.5 h-8 rounded-full gradient-accent" />
                {current.label}
              </h2>

              {current.theme && current.themeDescription && <ThemeCard theme={current.theme} description={current.themeDescription} />}

              <div className="grid gap-6 sm:grid-cols-2">
                {current.books.map((book) => (
                  <BookCard key={book.title} book={book} />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="section-padding pb-8 md:pb-12">
            <div className="container-narrow">
              <Card className="border-border/60 bg-card">
                <CardContent className="py-8 text-center text-muted-foreground">As sugestões de leitura ainda não foram publicadas para este mês.</CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Archive */}
        {past.length > 0 && (
          <section className="px-6 pb-16 md:px-8 lg:px-12">
            <div className="container-narrow">
              <h2 className="text-xl font-semibold mb-4 text-foreground/70">Meses anteriores</h2>
              <Accordion type="single" collapsible onValueChange={(val) => val && analytics.sectionView(`archive_${val}`)}>
                {past.map((entry) => (
                  <AccordionItem key={entry.month} value={entry.month}>
                    <AccordionTrigger className="text-base">
                      <span className="flex items-center gap-3">
                        {entry.label}
                        {entry.theme && <span className="text-xs font-normal text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{entry.theme}</span>}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {entry.theme && entry.themeDescription && <ThemeCard theme={entry.theme} description={entry.themeDescription} />}
                      <div className="grid gap-6 pt-2 sm:grid-cols-2">
                        {entry.books.map((book) => (
                          <BookCard key={book.title} book={book} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
