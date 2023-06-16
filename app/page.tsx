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
