import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { masterVictory, permanentMarker, plusJakartaSans } from '@/lib/fonts'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://decentgrowth.com'

export const viewport: Viewport = {
  themeColor: '#FE7402',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DECENT | Web3 Community & Growth Specialist',
    template: '%s | DECENT',
  },
  description:
    '4+ Years of Web3 Community Management, Moderation, Coordinated Raids, Shilling, and Strategic Growth Execution. Proven systems that turn hype into enduring communities.',
  keywords: [
    'Web3 Community Manager',
    'Crypto Growth Specialist',
    'Telegram Moderation',
    'Web3 Raider Team',
    'Crypto Raid Execution',
    'Solana Community Growth',
    'Ethereum Community',
    'Web3 Marketing',
    'Crypto Shilling Team',
    'Community Engagement',
    'Proof of Work Web3',
    'DECENT Web3',
    'Real Decent',
    '@real_decent1',
    'Crypto Alpha Channel',
  ],
  authors: [{ name: 'DECENT', url: 'https://x.com/real_decent1' }],
  creator: 'DECENT (@real_decent1)',
  publisher: 'DECENT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'DECENT | Web3 Community & Growth Specialist',
    description:
      '4+ Years of Web3 Community Management, Moderation, Coordinated Raids, Shilling, and Growth Strategy. Understand the project, keep the community active, execute consistently.',
    siteName: 'DECENT Growth',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'DECENT - Web3 Community & Growth Specialist Banner',
      },
      {
        url: '/hero-text.png',
        width: 800,
        height: 400,
        type: 'image/png',
        alt: 'DECENT Signature Brand Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DECENT | Web3 Community & Growth Specialist',
    description:
      '4+ Years in Web3 | Community | Moderation | Raids | Shilling | Growth Strategy. Deploy coordinated teams and scalable community systems.',
    creator: '@real_decent1',
    site: '@real_decent1',
    images: [
      {
        url: '/hero-image.png',
        alt: 'DECENT - Web3 Growth Specialist Artwork',
      },
      {
        url: '/hero-text.png',
        alt: 'DECENT Brand Graphic Banner',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/crown.png',
        type: 'image/png',
      },
    ],
    shortcut: '/crown.png',
    apple: '/crown.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${masterVictory.variable} ${permanentMarker.variable}`}
    >
      <body className="font-sans antialiased bg-white text-zinc-900 selection:bg-[#FE7402] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
