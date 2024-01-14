"use client"
import Image from 'next/image'
import styles from '/app/page.module.css'
import { Headline } from '/app/components/Headline'
import Link from 'next/link'
import { Links } from '@/app/components/Links'
export default function Home() {
  return (
    <main className={styles.main}>
        <Headline title="page.jsx">
          <code className={styles.code}>app/page.jsx</code>
        </Headline>
        <Link href="/other_page">別ページへ</Link>
        <Links/>
    </main>
  )
}