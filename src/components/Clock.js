import React, { Component } from 'react'
import Button from './Button';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            locale:'bn-BD'
        };
    }
    componentDidMount(){
        this.clockTimer = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }

    tick(){
        this.setState({
            date:new Date(),
        })
    }
    
    handleClick =(locale)=>{
        this.setState({
            locale,
        })
    }
    render(){
    
      const {date,locale} = this.state;
      let button;
      if(locale==='bn-BD'){
          button =  <Button change={this.handleClick} locale='en-US' />
      }
      else{
         button = <Button change={this.handleClick} locale='bn-BD' />
      }
        return (
            <div>
                <h1 className='heading'>
                <span className='text'>{date.toLocaleTimeString(locale)}</span>
                </h1>
               {button}
            </div>
        )
    }
}
