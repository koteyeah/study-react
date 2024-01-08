import Image from 'next/image'
import styles from './page.module.css'
import { Links } from './components/Links'
import { Headline } from './components/Headline'
export default function Home() {
  return (
    <main className={styles.main}>
        <Headline title="page.js" />
        <Links />
    </main>
  )
}
