import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
// import User from './components/User';



function App() {
  
  return (
    <div>
     
     <Counter render={(count,incrementCount)=> <ClickCounter counter={count} incrementCount={incrementCount} />} />
     <Counter render={(count,incrementCount)=> <HoverCounter counter={count} incrementCount={incrementCount} />} />
    </div>
  )
}

export default App;
