import {useState,useEffect} from 'react'

export default function TimeComponent() {
    const [count,setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = ()=>{
        setDate(new Date())
    }
    useEffect(()=>{
        document.title = `Clicked ${count} times`;
    },[count])

    useEffect(()=>{
        const interval= setInterval(tick,1000);

        return ()=>{
            clearInterval(interval)
        }

    },[])
    const addClick = ()=>{
      setCount((prevState)=> prevState + 1);
    }
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type='button' onClick={addClick}>Click</button>
            </p>
        </div>
    )
}
