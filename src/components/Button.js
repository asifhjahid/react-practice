import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        // console.log(`Button component rendered`);
        const {change,locale} = this.props;
        return (
            <div>
               <button onClick={()=>change(locale)}>Click Here</button> 
            </div>
        )
    }
}
