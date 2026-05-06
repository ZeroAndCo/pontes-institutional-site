## CLAY page — Remove "editora(s)" and use gender-neutral wording

Rewrite all visible text in `src/pages/ClayEditoras.tsx` to remove every occurrence of "editora/editoras/editorial" without substituting another noun (rephrase to keep meaning), and rewrite gendered words ("Fundadora", "Destaque", "Parceira", "leitores", "assinantes", "usuário", "novos", "ativos", "selecionadas") into neutral forms. Also rename the route and update related references.

### Route, file, and metadata

- New route: `/parceiros-fundadores` (replaces `/editoras-parceiras-fundadoras`).
- Rename file `src/pages/ClayEditoras.tsx` → `src/pages/ClayParceiros.tsx` (component renamed `ClayParceiros`).
- Update `src/App.tsx` Route `path` and import.
- Update `public/sitemap.xml` URL.
- Update `analytics.pageView("Clay Parceiros", "/parceiros-fundadores")`.
- `document.title` → `"CLAY — Parceiros Fundadores | Pontes para Leitura"`.

### Slide-by-slide text rewrites (key changes)

**Slide 1 (Cover)**

- Subtitle: "Convite para Editoras Parceiras Fundadoras" → "Convite para Parcerias Fundadoras".

**Slide 3 (Oportunidade de Mercado)**

- "…oportunidade estratégica para editoras que desejam estar presentes…" → "…oportunidade estratégica para quem deseja estar presente…".

**Slide 7 (Oportunidade para Editoras)**

- Section tag and heading: "Oportunidade para Editoras" → "Oportunidade para Parcerias".
- "Ao apoiar o CLAY, a editora passa a fazer parte…" → "Ao apoiar o CLAY, sua organização passa a fazer parte…".
- Card "Presença de marca em contexto de valor": "A editora passa a estar presente…" → "Sua marca passa a estar presente…".
- Closing line: "O CLAY aproxima editoras da construção do leitor — e não apenas da venda do livro." → "O CLAY aproxima parcerias da construção da prática leitora — e não apenas da venda do livro."

**Slide 8 (Estrutura de Cotas)**

- "Escolha como sua editora quer participar" → "Escolha como participar".
- Tier names: "Parceira Fundadora" → "Parceria Fundadora"; "Parceira Destaque" → "Parceria Destaque".
- "Ideal para editoras que desejam:" → "Ideal para quem deseja:".
- Bullet "Quantidade a combinar de assinaturas gratuitas para equipe e clientes selecionadas da editora" → "Quantidade a combinar de assinaturas gratuitas para equipe e clientes selecionados da organização parceira".

**Slide 9 (Contrapartidas)**

- Heading: "Onde sua editora vive dentro do CLAY" → "Onde sua marca vive dentro do CLAY".
- Bullet "Reconhecimento como editora parceira do ciclo fundador" → "Reconhecimento como parceria do ciclo fundador".
- "ativações editoriais" → "ativações temáticas".

**Slide 10 (Investimento)**

- Heading: "Convite para participação como Parceira Fundadora" → "Convite para participação como Parceria Fundadora".
- Card labels: "Editora Parceira Fundadora" → "Parceria Fundadora"; "Editora Parceira Destaque" → "Parceria Destaque".
- Comparison row "Presença como parceira fundadora" → "Presença como parceria fundadora".

**Slide 11 (Impacto)**

- "Ao apoiar o CLAY, sua editora ajuda a formar leitores" → "Ao apoiar o CLAY, sua organização ajuda a formar pessoas leitoras".
- "fortalecimento do futuro do mercado editorial" → "fortalecimento do futuro do ecossistema do livro".

**Slide 12 (CTA Final)**

- "primeiras cotas para editoras parceiras fundadoras" → "primeiras cotas para parcerias fundadoras".
- "construir com sua editora uma presença estratégica…" → "construir com sua organização uma presença estratégica…".
- "CLAY + Editoras Parceiras" → "CLAY + Parcerias Fundadoras".
- WhatsApp/Email subjects: "Editora Parceira Fundadora" → "Parceria Fundadora".

### Memory update

- Update `mem://features/clay-presentation` to reflect new route `/clay-parceiros-fundadores`, file name, / no-"editora" terminology.
- Update `mem://index.md` reference accordingly.