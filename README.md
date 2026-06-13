# ClearShift

Structured shift handoffs for clinic and community health teams.

Built for the [Mind the Product World Product Day 2025](https://www.mindtheproduct.com/) hackathon.



---

## The problem

In community health and clinic settings, shift handoffs are often verbal, rushed, or written in a notes app. Critical information about clients, open tasks, and flags gets lost between shifts. The incoming person walks in blind.

ClearShift gives outgoing staff a structured two-minute form to capture what happened, what's open, and how urgent it is — so the next person is never starting from zero.

---

## What it does

- **End-of-shift form** — staff fill in what happened, any open items, and set a flag level (All clear / Heads up / Needs attention)
- **Handoff feed** — incoming staff see the most recent handoffs in order, colour-coded by urgency
- **AI brief** — one tap generates a plain-English summary of any handoff card, built for tired eyes at shift change

---

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, fully client-side rendered
- [Supabase](https://supabase.com/) — Postgres database + anon API
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) + [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — type pairing
- [Vercel](https://vercel.com/) — deployment

---

## Running locally

```bash
git clone https://github.com/dwijjoshi14/ClearShift.git
cd ClearShift
npm install
```

Create a `.env.local` file in the root:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Then:

```bash
npm run dev
```

Open [http://localhost:3000/handoff](http://localhost:3000/handoff).

---

## Database

One table in Supabase:

```sql
create table handoffs (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  staff_name text not null,
  shift_date date not null,
  key_events text not null,
  open_items text,
  flag_level text check (flag_level in ('all_clear', 'heads_up', 'needs_attention')) not null
);
```

RLS is disabled for the hackathon demo. For production use, add row-level security policies.

---

## Project structure

```
app/
  handoff/
    page.tsx          # handoff feed (list view)
    page.module.css
    new/
      page.tsx        # end-of-shift form
      page.module.css
  lib/
    supabase.ts       # supabase client + types
  globals.css
  layout.tsx
  page.tsx            # root redirect
```

---

## Live demo

[project-ak4dq-pu47a3emu-dwij-joshi-s-projects.vercel.app/](https://project-ak4dq-pu47a3emu-dwij-joshi-s-projects.vercel.app/)

---

## Author

**Dwij Joshi** — Mechatronics Engineering, Toronto Metropolitan University  
[github.com/dwijjoshi14](https://github.com/dwijjoshi14) · [linkedin.com/in/dwij-joshi-14-tron](https://linkedin.com/in/dwij-joshi-14-tron)
