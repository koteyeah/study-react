"use client"
import Image from 'next/image'
import styles from '/app/page.module.css'
import { Headline } from '/app/components/Headline'
import Link from 'next/link'
import { Links } from '@/app/components/Links'
import { useEffect } from 'react'
import { useCallback, useState } from 'react';
import { CountButton } from './components/CountButton'
export default function Home() {
  const [count,setCount]=useState(0);
  // コールバック関数は再生されない。第二引数に変数を置くことで変更したときに関数が再されるようになる
      const handleClick=useCallback(()=>{
          if(count<10){
              setCount(count=>count+1);
          }
      },[count]);
  //このDOMがレンダリングされる瞬間に実行される関数
  useEffect(()=>{
    document.body.style.backgroundColor="red";
  //アンマウント時に実行される
    return()=>{
    document.body.style.backgroundColor="";
    }
    },[count])
  return (
    <main className={styles.main}>
        <Headline title="page.jsx">
          <code className={styles.code}>app/page.jsx</code>
        </Headline>
        <CountButton count={count} onClick={handleClick}/>
        <Link href="/other_page">別ページへ</Link>
        <Links/>
    </main>
  )
}