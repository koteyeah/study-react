import { useCallback, useState } from 'react';
import styles from '/app/page.module.css'
export function CountButton(props){
    const [count,setCount]=useState(props.count);
// コールバック関数は再生されない。第二引数に変数を置くことで変更したときに関数が再されるようになる
    const handleClick=useCallback(()=>{
        if(count<10){
            setCount(count=>count+1);
        }
    },[count]);
  return(
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>関数発動ボタン</button>
    </>
  );
}