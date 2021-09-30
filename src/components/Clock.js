import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
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
    
    render(){
      const locale = this.props.locale;
        return (
            <div>
                <h1 className='heading'>
                <span className='text'>{this.state.date.toLocaleTimeString(locale)}</span>
                </h1>
            </div>
        )
    }
}
