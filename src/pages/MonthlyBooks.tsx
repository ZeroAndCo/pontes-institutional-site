import { useState, useEffect } from "react";
import { BookOpen, ShoppingCart, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import booksData from "@/data/monthly-books.json";

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
}

interface MonthEntry {
  month: string;
  label: string;
  books: Book[];
}

function BookCard({ book }: { book: Book }) {
  const hasLink = book.amazonUrl.length > 0;

  return (
    <Card className="overflow-hidden border-border/60 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <div className="min-w-0">
            <CardTitle className="text-lg leading-snug">{book.title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              {book.author} · {book.publisher}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-foreground/85">
          {book.description}
        </p>

        <div className="rounded-lg bg-secondary/60 p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1">
            <User className="h-3.5 w-3.5" />
            Sugerido por {book.suggestedBy}
          </div>
          <p className="text-sm italic text-foreground/75">
            "{book.suggestionReason}"
          </p>
        </div>

        {hasLink ? (
          <Button asChild className="w-full gap-2">
            <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
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
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Área restrita</CardTitle>
          <p className="text-sm text-muted-foreground">
            Digite a senha para acessar as sugestões de leitura.
          </p>
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
            {error && (
              <p className="text-xs text-destructive">Senha incorreta.</p>
            )}
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

  if (!authenticated) {
    return <PasswordGate onUnlock={() => setAuthenticated(true)} />;
  }

  const data = booksData as MonthEntry[];
  const sorted = [...data].sort((a, b) => b.month.localeCompare(a.month));
  const [current, ...past] = sorted;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="section-padding pb-8 md:pb-12">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl">Livros do Mês</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Sugestões de leitura selecionadas com carinho pela equipe e
            colaboradores do Pontes para Leitura.
          </p>
        </div>
      </header>

      {/* Current month */}
      {current && (
        <section className="px-6 pb-12 md:px-8 lg:px-12">
          <div className="container-narrow">
            <h2 className="text-xl font-semibold mb-6 text-primary">
              {current.label}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {current.books.map((book) => (
                <BookCard key={book.title} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Archive */}
      {past.length > 0 && (
        <section className="px-6 pb-16 md:px-8 lg:px-12">
          <div className="container-narrow">
            <h2 className="text-xl font-semibold mb-4 text-foreground/70">
              Meses anteriores
            </h2>
            <Accordion type="single" collapsible>
              {past.map((entry) => (
                <AccordionItem key={entry.month} value={entry.month}>
                  <AccordionTrigger className="text-base">
                    {entry.label}
                  </AccordionTrigger>
                  <AccordionContent>
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
    </div>
  );
}
