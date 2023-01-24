import React, { Component } from 'react'

class CountIncrement36 extends Component {
   
    render() {
        const { count, ClickIncrement } = this.props
        return (


            <div>
                <button onClick={ClickIncrement}>IncrementCount {count}</button>

            </div>
        )
    }
}

export default CountIncrement36