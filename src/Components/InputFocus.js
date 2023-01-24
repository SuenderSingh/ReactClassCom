import React, { Component } from 'react'
import Input from './Input'

export class InputFocus extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    FocusChange = () =>
    {
        this.componentRef.current.InputFocus()
    }



  render() {
    return (
      <div>
      <Input ref={this.componentRef}/>
      <button onClick={this.FocusChange}>Click</button>
      </div>
    )
  }
}

export default InputFocus