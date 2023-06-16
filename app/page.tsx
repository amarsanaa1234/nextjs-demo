import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head/>
    <main>
      <h1>Home Page brh</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
    </>
  )
}
