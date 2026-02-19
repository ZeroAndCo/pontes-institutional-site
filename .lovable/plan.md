

## Monthly Book Suggestions Page

A password-protected page showcasing 2-3 curated book recommendations per month, with an archive of past months and Amazon affiliate links.

---

### How It Works

**Access:** Visitors who navigate to `/livros-do-mes` will see a simple password prompt. After entering the correct password, the page content is revealed. The password will be stored in the code for now (easy to change later).

**Data:** All book data lives in a single JSON file (`src/data/monthly-books.json`). To update books each month, you just ask me to edit that file -- no other code changes needed.

**Layout:**
- Current month's picks shown prominently at the top with large cards
- Past months listed below in a collapsible archive, organized newest-first
- Each book card shows: cover placeholder, title, author, publisher, a short description, who suggested it and why, and a "Comprar na Amazon" button (linked when the affiliate program is ready)

---

### What Gets Created

1. **`src/data/monthly-books.json`** -- The data file with the book list, structured by month. Includes placeholder/example data so you can preview the layout.

2. **`src/pages/MonthlyBooks.tsx`** -- The page component with:
   - A simple password gate (stored in the component; visitors type the password once per session)
   - Current month's featured books in detailed cards
   - Archive section with past months in collapsible accordions
   - Each book card contains: title, author, publisher, description, suggester info, and Amazon link button
   - Fully responsive (mobile-friendly)
   - Uses the existing brand design system (teal, orange, cream, etc.)

3. **`src/App.tsx`** -- Updated to add the `/livros-do-mes` route

---

### Data File Structure

The JSON file will follow this format:

```text
[
  {
    "month": "2026-02",
    "label": "Fevereiro 2026",
    "books": [
      {
        "title": "Book Title",
        "author": "Author Name",
        "publisher": "Publisher Name",
        "description": "A short description of the book.",
        "suggestedBy": "Name of the person suggesting",
        "suggestionReason": "Why they are recommending this book.",
        "amazonUrl": ""  <-- empty until affiliate program is ready
      }
    ]
  }
]
```

---

### Technical Details

- **Password gate**: Uses React state; password is hardcoded (e.g. `"pontes2026"`). Stored in `sessionStorage` so the visitor doesn't need to re-enter it while browsing.
- **No navigation link**: The page won't appear in the header or footer menus -- only accessible via direct URL.
- **Amazon links**: The button will show "Em breve" (coming soon) and be disabled when `amazonUrl` is empty. When you set up the affiliate program, just fill in the URLs in the JSON file.
- **No new dependencies needed** -- uses existing UI components (Accordion, Button, Card, etc.).

