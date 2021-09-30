import withCounter from "./HOC/withCounter";

const HoverCounter = ({count,incrementCount})=>{
    
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    )
}

export default withCounter(HoverCounter)
