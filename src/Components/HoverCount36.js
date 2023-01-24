import React, { Component } from 'react'

class HoverCount36 extends Component {

    
    render() {

        const { count, IncrementHover } = this.props
        return (
            <div>
                <button onMouseOver ={IncrementHover}> Count Hover  {count} </button>
            </div>
        )
    }
}

export default HoverCount36