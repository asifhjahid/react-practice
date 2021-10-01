import React,{useState} from 'react'
import TimeComponent from './components/hooks/useEffect/TimeComponent'


export default function App() {
  const[show,setShow] = useState(true)
  return (
    <div>
      <div>{show && <TimeComponent /> }</div>
      <p>
        <button type='button' onClick={()=>setShow((prevShow)=>!prevShow)}>
          {show ? 'Hide post' : 'Show post'}
        </button>
      </p>
    </div>
  )
}
