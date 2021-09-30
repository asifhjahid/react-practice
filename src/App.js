import React from 'react';
import ClockList from './components/ClockList';
// import Clock from './components/Clock


function App() {
  const quantities = [1,2,3]
  return <div>
     <ClockList quantities={quantities} />
    </div>;
}

export default App;
