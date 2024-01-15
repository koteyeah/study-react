import Image from 'next/image'
import styles from '../page.module.css'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
        <Headline title="page.js">
          <code className={styles.code}>app/other_page/page.jsx</code>
        </Headline>
        <Link href="../">メインページへ</Link>
        <Links />
    </main>
  )
}
