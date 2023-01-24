import React, { Component } from 'react'

 class User37 extends Component {
  render() {
    return (
      <div>{this.props.render (false)}</div>
    )
  }
}

export default User37

//app.js file code.
// <User37 render = { (user) => user ? "logidin" : "pls login"}/>