import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        
        const {change,locale} = this.props;
        return (
            <div>
               <button onClick={()=>change(locale)}>
                   {locale==='bn-BD'? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button> 
            </div>
        )
    }
}
