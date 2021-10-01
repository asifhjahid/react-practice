import {useState} from 'react'

export default function Counter() {
    const[count,setCount] = useState(0);
    return (
        <div>
            {count}
            <p>
                <button type='button' onClick={()=>setCount((prevState)=>prevState + 1)}>Add 1</button>
            </p>
        </div>
    )
}
