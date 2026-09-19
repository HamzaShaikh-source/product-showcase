# Product Showcase — Typed Props

A Next.js + TypeScript project for the **Props (Typed)** Learning Unit. You'll build three reusable, **typed** components and compose them into a store page.

## How to work on this assignment

You do **not** push to this repository. Work on your **own copy**:

### 1. Fork this repo to your personal GitHub account
Click **Fork** (top-right of this page). This creates `https://github.com/<your-username>/product-showcase` on **your** account. Keep it **public**.

### 2. Clone your fork (not this one)
```bash
git clone https://github.com/<your-username>/product-showcase.git
cd product-showcase
npm install
npm run dev
```
Open **http://localhost:3000** — you'll see the store with placeholder ("TODO") content. Make it real.

### 3. Build, commit, and push to your fork
```bash
git checkout -b feature/typed-props
# ...make your changes...
git add -A
git commit -m "Build typed-props components"
git push -u origin feature/typed-props
```

### 4. Open a Pull Request on YOUR OWN fork
On your fork's page, open a PR from `feature/typed-props` → your fork's `main`.
**Do not open the PR against `kalviumcommunity`** — it must stay within your own forked repository.

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

Upload these screenshots:

1. **The running app** at `http://localhost:3000` — showing the greeting and at least two different product cards.
2. **Your `ProductCard.tsx`** code — the typed props (`type Props = { ... }`) and the destructured parameter.
3. **Your Pull Request** on your own fork — showing the PR page (`feature/typed-props` → your `main`).

> Tip: if TypeScript underlines something red, hover over it — the error tells you exactly which prop is wrong, missing, or misspelled. That's typed props doing their job.
