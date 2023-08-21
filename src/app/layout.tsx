"use client"

import './globals.css'
import "./fonts.css"
import { usePathname } from 'next/navigation'
import Header from "../../components/header.js"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
