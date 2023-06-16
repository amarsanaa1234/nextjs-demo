import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'amaraa in the house',
  description: 'turuu: uuuhuuuuu, amaraa: uuyaa ',
  themeColor: 'black',
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FFindingNemoNemo%2F&psig=AOvVaw0QMNM-nw6iBpa__ATc9GIS&ust=1686984185364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDAiPiXx_8CFQAAAAAdAAAAABAE',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FFindingNemoNemo%2F&psig=AOvVaw0QMNM-nw6iBpa__ATc9GIS&ust=1686984185364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDAiPiXx_8CFQAAAAAdAAAAABAE',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FFindingNemoNemo%2F&psig=AOvVaw0QMNM-nw6iBpa__ATc9GIS&ust=1686984185364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDAiPiXx_8CFQAAAAAdAAAAABAE',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ai horvoo',
    description: 'olsood bwl ym idchihj bgaarai',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['../public/images/php.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="My page title" key="title" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
