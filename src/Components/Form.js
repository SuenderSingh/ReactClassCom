import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {

            userName: " ",
            comments: " ",
            tech: " "
        }
    }
    changeUserName = (event) => {
        this.setState({

            userName: event.target.value
        })

    }

    changeComments = (event) => {

        this.setState({
            comments: event.target.value
        })

    }

    changeTechnology = (event) => {
        this.setState({
            tech: event.target.value
        })
    }
    submitForm = (event) =>
    {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.tech}`)

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label> UserName</label>
                    <input type="text" value={this.state.userName} onChange={this.changeUserName}></input>
                    <br />
                    <label> Text Area</label>
                    <textarea value={this.state.comments} onChange={this.changeComments}></textarea>
                    <br />
                    <select value={this.state.tech} onChange={this.changeTechnology}>
                        <option value="rect">React</option>
                        <option value="js">JavaScript</option>
                        <option value="java">Java</option>
                    </select>

                    <button type ="submit" > Submit</button>
                </form>

            </div>
        )
    }
}

export default Form;