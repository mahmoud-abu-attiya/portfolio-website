import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mahmoud Abu-Attiya | Frontend Developer",
  description: "Personal portfolio website of Mahmoud Abu-Attiya, Frontend Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <Header />
              {children}
              <Footer />
          </ThemeProvider>
      </body>
    </html>
  )
}
