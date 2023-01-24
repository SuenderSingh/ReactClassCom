import React, { Component } from 'react'

 class Counter37 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    IncrementHover = () => {
        this.setState(preVal => {

            return {
                count: preVal.count + 1
            }

        })
    }
    
  render() {
    return (
      <div></div>
    )
  }
}

export default Counter37