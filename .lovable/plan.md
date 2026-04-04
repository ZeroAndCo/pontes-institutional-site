
# Clay - Editoras Parceiras Fundadoras Page

## Summary
Create a new page at `/editoras-parceiras-fundadoras` following the same vertical scroll, full-screen section pattern used in `Approach.tsx`. The content follows the uploaded PDF presentation targeting publishers.

## Technical Details

### Files to create/edit

**1. Create `src/pages/ClayEditoras.tsx`**
A new page component with ~10 full-screen scrolling sections, mirroring `Approach.tsx` styling:

| Section | Background | Content |
|---------|-----------|---------|
| 1. Cover | `gradient-hero` | CLAY title, subtitle "Convite para Editoras Parceiras Fundadoras", Pontes logo, bounce arrow |
| 2. O Cenario | `bg-cream` | Reading crisis stats (27% readers, 81% social media, etc.) with icon cards |
| 3. Oportunidade | `bg-background` | Market opportunity - clubs, curators, digital platforms as growth signals |
| 4. O Desafio | `bg-primary` (dark) | Three barriers: constancy, distractions, belonging - styled like Approach's "O Problema" |
| 5. A Solucao | `bg-cream` | What CLAY is - app features list with icon grid (trails, rituals, gamification, community) |
| 6. Como Funciona | `bg-background` | 5-step numbered flow (onboarding, trails, rituals, progress, community) |
| 7. Oportunidade para Editoras | `gradient-hero` | 4 value pillars for publishers with benefit cards |
| 8. Estrutura de Cotas | `bg-cream` | Two-column comparison: Fundadora vs Destaque tiers |
| 9. Contrapartidas | `bg-background` | 4 numbered blocks: institutional presence, reader journey, catalog, innovation |
| 10. Investimento | `bg-primary` (dark) | Pricing table (R$12.000 / R$18.000) with feature comparison |
| 11. Impacto | `bg-cream` | Impact goals list |
| 12. CTA Final | `gradient-hero` | Invitation to join + WhatsApp, Email, Contact buttons (same as Approach) |

- GA tracking: `pageView`, `contactClick`, `whatsappClick`
- SEO: `document.title` set dynamically

**2. Edit `src/App.tsx`**
- Import `ClayEditoras` and add route: `<Route path="/editoras-parceiras-fundadoras" element={<ClayEditoras />} />`

**3. Edit `public/sitemap.xml`**
- Add `/editoras-parceiras-fundadoras` entry

This page will NOT be linked from the main navigation (same hidden approach as `/approach`).
