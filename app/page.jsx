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
  const handleClick=useCallback(()=>{
      if(count<10){
          setCount(count=>count+1);
      }
  },[count]);
  useEffect(()=>{
    document.body.style.backgroundColor="red";
  return()=>{
  document.body.style.backgroundColor="";
  }},[count])
  const [array,setArray]=useState([])
  const handleAdd=useCallback(()=>{
    setArray((prevArray)=>[...prevArray,1])
  },[array])
  return (
    <main className={styles.main}>
        <Headline title="page.jsx">
          <code className={styles.code}>app/page.jsx</code>
        </Headline>
        <CountButton count={count} onClick={handleClick}/>

        <button onClick={handleAdd}>追加</button>
        <ul>
        {array.map(item=>{
          return <li>{item}</li>
        })}
        </ul>
        <Link href="/other_page">別ページへ</Link>
        <Links/>
    </main>
  )
}