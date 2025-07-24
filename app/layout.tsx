import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Halwai - Premium Catering Services",
  description:
    "Elevate your events with our exceptional catering services. From weddings to corporate events, we provide gourmet cuisine and impeccable service.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
 <head>
        {/* Google Fonts link for Playfair Display and Lato */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
