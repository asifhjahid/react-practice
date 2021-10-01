import React from 'react'
import HoverCounter from './HoverCounter'
import Counter from './Counter'
import ThemeContext from '../context/ThemeContext'

export default function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
            {(count,incrementCount)=> {
                return <ThemeContext.Consumer>{({theme,switchTheme}) => <HoverCounter counter={count} 
                incrementCount={incrementCount} 
                theme={theme} switchTheme={switchTheme} />}</ThemeContext.Consumer>
            }}
            </Counter>
        </div>
    )
}
