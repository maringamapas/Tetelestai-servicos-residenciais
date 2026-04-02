import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { dadosCliente } from "@/data/cliente"
import { ClienteProvider } from "@/components/cliente-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://tetelestai-servicos.vercel.app"
const ogImageUrl = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dadosCliente.seo.siteTitle,
  description: dadosCliente.seo.description,
  generator: "v0.app",
  openGraph: {
    title: "Tetelestai Serviço Residências | Dedetização e Limpeza Rio de Janeiro",
    description:
      "Dedetização, Descupinização, Desratização, Limpeza de Cisterna e Caixa d'Água em Rio de Janeiro. Ligue: (21) 97016-1801",
    type: "website",
    url: siteUrl,
    siteName: "Tetelestai Serviço Residências",
    locale: "pt_BR",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Tetelestai Serviço Residências - Serviços Profissionais de Dedetização e Limpeza em Rio de Janeiro",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tetelestai Serviço Residências | Dedetização e Limpeza Rio de Janeiro",
    description:
      "Dedetização, Descupinização, Desratização, Limpeza de Cisterna e Caixa d'Água. Ligue: (21) 97016-1801",
    images: [
      {
        url: ogImageUrl,
        alt: "Tetelestai Serviço Residências - Serviços Profissionais de Dedetização e Limpeza em Rio de Janeiro",
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
