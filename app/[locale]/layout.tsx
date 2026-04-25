import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Nunito, Cairo } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const nunito = Nunito({
  subsets: ["latin"],
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
})

export const metadata: Metadata = {
  title: "Mahmoud Abu-Attiya | Frontend Developer",
  description: "Personal portfolio website of Mahmoud Abu-Attiya, Frontend Developer",
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={locale === 'ar' ? cairo.className : nunito.className}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <Header />
                {children}
                <Toaster />
                <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
      </body>
    </html>
  )
}
