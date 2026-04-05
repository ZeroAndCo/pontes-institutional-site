

# Agentes Pontes — New Page at `/agentes-pontes`

## Summary
Create a new hidden page following the same vertical-scroll, full-screen section pattern used in `Approach.tsx` and `ClayEditoras.tsx`. Content follows the uploaded 17-slide PDF about the "Agentes Pontes" reading mediators formation program, targeting potential investors/sponsors.

## Sections (mapped from PDF)

| # | Section | Background | Content |
|---|---------|-----------|---------|
| 1 | Cover | `gradient-hero` | "Agentes Pontes" title, subtitle about forming reading leaders, Pontes logo, bounce arrow |
| 2 | O Que São Agentes Pontes | `bg-cream` | Why territories need local bridges of change, 4 bullet points (more than action, more than books, etc.) |
| 3 | O Desafio | `bg-primary` (dark) | 5 challenges: limited access, no qualified mediation, few continuous experiences, low space activation, fragile community bonds |
| 4 | A Tese | `bg-background` | Reading as tool for human development, community strengthening, cultural repertoire, territorial activation, social transformation |
| 5 | O Programa | `bg-cream` | What Agentes Pontes is — 8 program components (articulation, events, 20h training, mapping, 60-day application, weekly monitoring, curation, results) |
| 6 | Pilar Conceitual | `bg-background` | Teoria U methodology — 3 movements: listen, reposition, activate |
| 7 | Como Funciona | `gradient-hero` | 4 program stages: diagnosis, training, practical application, consolidation |
| 8 | Jornada de Transformação | `bg-cream` | Before/During/After transformation journey of a participant |
| 9 | Públicos e Territórios | `bg-background` | Audiences reached (children, families, educators, community leaders, etc.) |
| 10 | Impacto Social | `bg-primary` (dark) | 4 layers: individual, relationships, spaces, territory |
| 11 | Avaliação e Trackeamento | `bg-cream` | 4 monitoring dimensions: participation, activation, transformation, territory |
| 12 | Por Que Investir | `bg-background` | 6 institutional benefits (ESG, reputation, narrative, engagement) |
| 13 | Perfis de Investidor | `gradient-hero` | 3 profiles: companies, institutes/foundations, private schools — table/cards |
| 14 | Contrapartidas | `bg-cream` | 8 deliverables for sponsors |
| 15 | Diferenciais | `bg-background` | 7 differentiators of the program |
| 16 | CTA Final | `gradient-hero` | Invitation to join + WhatsApp, Email, Contact buttons |

## Files to create/edit

1. **Create `src/pages/AgentesPontes.tsx`** — Full page component with all sections above, GA tracking (`pageView`, `contactClick`, `whatsappClick`), dynamic `document.title`
2. **Edit `src/App.tsx`** — Import and add route `<Route path="/agentes-pontes" element={<AgentesPontes />} />`
3. **Edit `public/sitemap.xml`** — Add `/agentes-pontes` entry

Page will NOT be linked from main navigation (same hidden approach as the other B2B pages).

