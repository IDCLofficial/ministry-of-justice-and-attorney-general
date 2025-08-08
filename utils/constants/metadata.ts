import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://imostatejudiciary.gov.ng'),
  title: "Ministry of Justice & Attorney General - Imo State",
  description: "Official website of the Imo State Ministry of Justice & Attorney General. Upholding the rule of law, promoting justice, and safeguarding the rights of all citizens in Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Justice & Attorney General - Imo State",
    description: "Upholding Rights. Advancing Justice. Empowering Imo.",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Ministry of Justice",
    "Attorney General",
    "Judiciary",
    "Legal Services",
    "Imo State Government",
    "Court System",
    "Nigeria",
    "Legal Aid",
    "Judicial Reforms",
    "Justice Delivery"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://imostatejudiciary.gov.ng",
    siteName: "Imo State Ministry of Justice & Attorney General",
    title: "Ministry of Justice & Attorney General - Imo State",
    description: "Upholding the rule of law, promoting justice, and safeguarding the rights of all citizens in Imo State through a transparent and efficient judicial system.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Justice & Attorney General"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/ng-logo.png",
    shortcut: "/assets/ng-logo.png",
    apple: "/assets/ng-logo.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a365d' },
    { media: '(prefers-color-scheme: dark)', color: '#1a365d' },
  ]
}