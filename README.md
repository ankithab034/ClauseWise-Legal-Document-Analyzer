
# ClauseWise – Legal Document Analyzer (Demo)

Production-style React + TypeScript app that demonstrates your ClauseWise concept:
- Multilingual OCR + NLP (simulated) using IBM Watson + Granite terminology
- Clause extraction & classification with risk/compliance hints
- Regulatory monitoring feed
- Knowledge graph visualization
- Clean legal-grade UI with Tailwind

> This repo is frontend-only and uses mocked services in `src/services/ai.ts` so you can run it locally and showcase the UX.
> You can later connect real IBM watsonx/Granite + RAG backends by swapping those functions.

## Tech
- Vite + React + TypeScript
- TailwindCSS
- React Router
- React Query
- d3 for tiny graph

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Netlify
- Use "Vite" preset.
- Build command: `npm run build`
- Publish directory: `dist`

## Connect real backends later
Replace `src/services/ai.ts` with API calls to:
- IBM Watson NLP (entity recognition, language id)
- Granite LLM for clause reasoning
- Your RAG/orchestration layer

## Push to GitHub
```bash
git init
git add .
git commit -m "feat: ClauseWise demo app"
git branch -M main
git remote add origin https://github.com/<your-username>/clausewise.git
git push -u origin main
```
