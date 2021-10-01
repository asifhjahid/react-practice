import React from 'react'

export default function HoverCounter({counter,incrementCount,theme,switchTheme}){
    const style = theme ==='dark' ? {backgroundColor: '#000000', color:'#ffffff'}:null
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {counter} times</h1>
            <button type='button' onClick={switchTheme}>Change Theme</button>
        </div>
    )
}
  