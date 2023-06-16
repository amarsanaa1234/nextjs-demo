import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Image from "next/image"
import mg from '../public/images/php.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main>
      <h1>Home Page brh</h1>
      <p>
        <Link href="/users">Users</Link>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:id" content="1467726470533754880" />
        <meta name="twitter:creator" content="@nextjs" />
        <meta name="twitter:creator:id" content="1467726470533754880" />
        <meta name="twitter:title" content="Next.js" />
        <meta name="twitter:description" content="The React Framework for the Web" />
        <meta name="twitter:image" content="https://ibb.co/kDSx379" />
        <Image
      src={mg}
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </p>
    </main>
    </>
  )
}
