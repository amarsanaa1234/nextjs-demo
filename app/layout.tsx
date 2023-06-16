import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import mg from '../public/images/php.png'
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'amaraa in the house',
//   description: 'turuu: uuuhuuuuu, amaraa: uuyaa ',
//   themeColor: 'white',
//   icons: {
//     icon: '/php.png',
//     shortcut: '/php.png',
//     apple: '/php.png',
//     other: {
//       rel: 'apple-touch-icon-precomposed',
//       url: '/apple-touch-icon-precomposed.png',
//     },
//   },
// }

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
