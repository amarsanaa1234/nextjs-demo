import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'amaraa in the house',
  description: 'turuu: uuuhuuuuu, amaraa: uuyaa ',
  themeColor: 'black',
  openGraph: {
    images: '/php.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ai horvoo',
    description: 'olsood bwl ym idchihj bgaarai',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FFindingNemoNemo%2F&psig=AOvVaw1mHZ1mD3FHFnGgEY8asSW9&ust=1686982131913000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjH-KSQx_8CFQAAAAAdAAAAABAJ'],
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
