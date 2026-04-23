

# Changes from PDF — Site, Agentes Pontes, and CLAY Pages

## 1. Homepage — `src/components/HowWeAct.tsx`

Replace the current 3 boxes with 4 new ones:

| # | Title | Description |
|---|-------|-------------|
| 1 | Projetos para Marcas | Desenvolvemos projetos de incentivo à leitura para marcas, com eventos, experiências, ações e ativações de vendas e desenvolvimento de produtos sociais vinculados à leitura. |
| 2 | Projetos de Impacto Social | Desenvolvemos projetos de incentivo à leitura em comunidades buscando a ampliação do desenvolvimento territorial e o impacto social local. |
| 3 | Agentes Pontes — Formação de Mediadores de Leitura | Formação de Mediadores de Leitura com versão para professores, voltado para escolas e versão para empresas — treinamentos de RH, programa de voluntariado, etc. |
| 4 | CLAY — Inteligência no Hábito de Leitura | Aplicativo de apoio para o desenvolvimento do hábito da leitura (Em Breve) |

Grid changes from `lg:grid-cols-3` to `lg:grid-cols-4` (or `md:grid-cols-2 lg:grid-cols-4`).

## 2. Agentes Pontes — `src/pages/AgentesPontes.tsx`

**Section 12 "Por Que Investir"** (line ~548): Change paragraph text from current to:
> "Ao apoiar o programa, sua organização se associa a uma iniciativa que combina educação, cultura, desenvolvimento territorial e impacto social mensurável. É um investimento em pessoas, comunidades e futuros possíveis."

(Note: the current text already matches this. The PDF says to change "Ao adquirir" to "Ao apoiar" — it seems this was already done. Will verify and keep as-is.)

**Section 14 "Contrapartidas"** (line ~637): Change paragraph text to:
> "Além da execução do programa, temos as contrapartidas institucionais e de comunicação que fortalecem a visibilidade da parceria e a narrativa de impacto gerado."

## 3. CLAY Editoras — `src/pages/ClayEditoras.tsx`

**Slide 2 "O Cenário"** (line ~49-83): Add a footer note with sources:
> "Fontes: 6ª edição da pesquisa Retratos da Leitura no Brasil - Instituto Pró-Livro, 2025 e Pesquisa Qualitativa Interna (Fevereiro 2026)"

**Slide 3 "Oportunidade de Mercado"** (line ~115): Change the orange box closing text from "O mercado não precisa apenas vender mais livros. Precisa formar mais leitores ativos e recorrentes" to:
> "O mercado precisa para além de vender mais livros se engajar em formar mais leitores ativos e recorrentes."

**Slide 5 "A Solução"** (line ~167): Remove "/webapp" from "aplicativo/webapp" — keep only "aplicativo".

**Slide 8 "Estrutura de Cotas"** (lines 288-318): Add to BOTH boxes a new item:
> "Quantidade a combinar de assinaturas gratuitas para equipe e clientes selecionadas da editora"

**Slide 10 "Investimento"** (lines 429, 436): Change prices:
- Fundadora: R$ 12.000 → R$ 36.000
- Destaque: R$ 18.000 → R$ 45.000

**Slide 12 "CTA Final"** (lines 530-557): Update contact links to use Adriane's details (WhatsApp number and email already point to the right places — will use `adriane@nossabiblioteca.com.br` for email).

## Files to edit

1. `src/components/HowWeAct.tsx` — Update actions array to 4 items, adjust grid
2. `src/pages/AgentesPontes.tsx` — Update Contrapartidas paragraph
3. `src/pages/ClayEditoras.tsx` — 6 text changes (sources footer, orange box text, remove webapp, add subscription item, update prices, update CTA contacts)

