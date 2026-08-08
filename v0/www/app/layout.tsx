import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL("https://cc.rj11.io"),
  title: "RJ · AI Coaching, Consulting & Advisory",
  description:
    "From non-technical to AI power user. Coaching for individuals, consulting for teams. Keep up with the AI frontier without the overwhelm.",
  openGraph: {
    title: "RJ · AI Coaching, Consulting & Advisory",
    description:
      "Coaching for individuals: from non-technical to AI power user. Consulting for companies: bring your team up to speed without disruption.",
    url: "https://cc.rj11.io",
    siteName: "cc.rj11.io",
    type: "website",
  },
}

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased motion-reduce:scroll-auto",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
