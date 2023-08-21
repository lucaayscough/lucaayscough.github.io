"use client"

import './globals.css'
import "./fonts.css"
import { usePathname } from 'next/navigation'
import Header from "./components/header.js"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const location = usePathname()
  const match = location.match(/^\/portfolio\/\w+$/)

  return (
    <html lang="en">
      <body>
        {!match && <Header />}
        {children}
      </body>
    </html>
  )
}
