import type { ReactNode } from 'react'
import Footer from './Footer'
import Nav from './Nav'

/** Layout for pages other than the home page. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pt-10 pb-16">{children}</main>
      <Footer />
    </>
  )
}
