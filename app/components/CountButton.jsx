"use client"
import { useCallback, useState } from 'react';
import styles from '/app/page.module.css'
export function CountButton(){
    const [count,setCount]=useState(0);
    const handleClick=(e)=>{
        setCount(count=>count+1);
    };
  return(
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>関数発動ボタン</button>
    </>
  );
}