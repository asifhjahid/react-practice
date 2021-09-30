import React from 'react'

export default function HoverCounter({counter,incrementCount}){
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {counter} times</h1>
        </div>
    )
}
  