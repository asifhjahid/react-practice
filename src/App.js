import React,{useState,useCallback,useMemo} from 'react'
import Button from './components/hooks/useCallback-useMemo/Button';
import ShowCount from './components/hooks/useCallback-useMemo/ShowCount';
import Title from './components/hooks/useCallback-useMemo/Title';



export default function App() {
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  
  const incrementByOne = useCallback(()=>{
    setCount1((prevState)=>prevState + 1)
  },[])
  const incrementByFive = useCallback(()=>{
    setCount2((prevState)=>prevState + 5)
  },[])
 const isEvenOdd = useMemo(()=>{
   let i = 1;
   while(i<10000000000);
   i = i + 1;
   return count1 % 2 ===0;

 },[count1])
  return (
    <div>
      <Title />
      <ShowCount title='Counter 1' count={count1}/>
      <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr />
      <ShowCount title='Counter 2' count={count2}/>
      <Button handleClick={incrementByFive}>Increment by Five</Button>
    </div>
  )
}
