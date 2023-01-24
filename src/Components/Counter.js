import React, { Component } from "react";
class Counter extends Component {
    constructor() {
        super()
        this.state =
        {
            count: 1
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreament() {
        if (this.state.count > 0)
            this.setState({
                count: this.state.count - 1
            })
        else {
            alert("Value is less then one ");
        }
    }
    render() {
        return (
            <div>
                <h2> total count = {this.state.count}</h2>
                <button onClick={() => this.increment()}> Increament</button>
                <button onClick={() => this.decreament()}> Decremant</button>
            </div>
        )
    }
}

export default Counter;