import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// The production build ships pre-rendered HTML (scripts/prerender.mjs); dev serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

inject()
