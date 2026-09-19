# Product Store — Typed Props (Starter)

A small Next.js + TypeScript starter for the **Props (Typed)** Learning Unit. You'll build three reusable, **typed** components and compose them into a store page.

## Setup

```bash
npm install
npm run dev
```

Open **http://localhost:3000** — you'll see the store with placeholder ("TODO") content. Your job is to make it real.

## What to build (in `app/components/`)

| File | Props to add |
|---|---|
| `Greeting.tsx` | `name: string` |
| `PriceTag.tsx` | `amount: number` |
| `ProductCard.tsx` | `title: string`, `price: number`, `inStock: boolean` |
| `app/page.tsx` | compose them — reuse `ProductCard` **twice** with different data |

Follow the `// TODO` comments in each file.

## Requirements

1. **Type your props.** Each component declares a props `type` (or `interface`) with correctly typed fields.
2. **Receive typed, destructured props.** e.g. `function Greeting({ name }: Props)`.
3. **Render props with curly braces.** e.g. `<h2>Hello, {name}!</h2>`.
4. **Reuse with variety.** In `app/page.tsx`, pass a `name` to `Greeting` and render `ProductCard` at least twice with different data. Numbers and booleans go **in braces**: `price={49} inStock={true}`.

## What to submit 📸

Once your store renders real data (no more "TODO" text), take screenshots and upload them:

1. **The running app** in your browser at `http://localhost:3000` — showing the greeting and at least two different product cards.
2. **Your `ProductCard.tsx`** code — showing the typed props (`type Props = { ... }`) and the destructured parameter.
3. **Your `app/page.tsx`** code — showing `ProductCard` reused twice with different props passed in braces.

> Tip: if TypeScript underlines something red, hover over it — the error message tells you exactly which prop is wrong, missing, or misspelled. That's typed props doing their job.
