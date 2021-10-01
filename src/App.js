import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './context/ThemeContext';




export default class App extends React.Component{
  state = {
    theme:'dark'
  }
  switchTheme = ()=>{
    this.setState(({theme})=>{
        if(theme ==='dark'){
            return {
                theme:'light',
            }

        }else{
            return{
                theme:'dark'
            }
        }
    })
  }
  render(){
    const{theme} = this.state;
    return (
      <div>
       
        <Counter>
        {(count,incrementCount)=> (
        <ClickCounter counter={count} incrementCount={incrementCount} />
        )}
        </Counter>
  
       <ThemeContext.Provider value={{theme:theme,switchTheme:this.switchTheme}}> 
        <Section  />
        </ThemeContext.Provider>
      </div>
    )
  }
}
