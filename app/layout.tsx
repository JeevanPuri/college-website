import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ISMT College - Bridging Academia & Industry in Nepal",
  description:
    "Earn internationally recognized UK qualifications from University of Sunderland and Pearson Edexcel without leaving Nepal. Join ISMT's mission to redefine higher education.",
  author: "Mr. Jeevan",
  keywords:
    "ISMT College, Nepal education, UK qualifications, University of Sunderland, Pearson Edexcel, higher education Nepal",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
