import React, { Component } from "react";
import ChildCom from "./ChildCom";
class ParentCom extends Component {
    constructor() {
        super()
        this.state = {
            name: "testName"
        }
this.testHandler = this.testHandler.bind(this);
    }

    testHandler() {
        alert(`hellow ${this.state.name}`);
    }

    render() {
        return (

            <div> <ChildCom testChange = {this.testHandler}/> </div>
        )
    }

}
export default ParentCom;