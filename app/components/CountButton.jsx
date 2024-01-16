export function CountButton(props){
  return(
    <>
    <h1>{props.count}</h1>
    <button onClick={props.onClick}>関数発動ボタン</button>
    </>
  );
}