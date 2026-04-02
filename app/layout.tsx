import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { dadosCliente } from "@/data/cliente"
import { ClienteProvider } from "@/components/cliente-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://san-dedetizadora-azul.vercel.app"
const ogImageUrl = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dadosCliente.seo.siteTitle,
  description: dadosCliente.seo.description,
  generator: "v0.app",
  openGraph: {
    title: "Dedetizadora e Desentupidora Lady Bug | Controle de Pragas Maringá",
    description:
      "Dedetização, Desratização, Descupinização e Controle de Pragas Urbanas em Maringá. Ligue agora: (44) 99932-4635",
    type: "website",
    url: siteUrl,
    siteName: "Dedetizadora e Desentupidora Lady Bug",
    locale: "pt_BR",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Dedetizadora e Desentupidora Lady Bug - Serviços Profissionais de Dedetização em Maringá",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedetizadora e Desentupidora Lady Bug | Controle de Pragas Maringá",
    description:
      "Dedetização, Desratização, Descupinização e Controle de Pragas Urbanas em Maringá. Ligue: (44) 99932-4635",
    images: [
      {
        url: ogImageUrl,
        alt: "Dedetizadora e Desentupidora Lady Bug - Serviços Profissionais de Dedetização em Maringá",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <ClienteProvider>
          {children}
        </ClienteProvider>
        <Analytics />
      </body>
    </html>
  )
}
