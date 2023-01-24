// import React, { Component } from "react";

// class EventBind extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//             name: "abc"
//         }
//     }
//     updateState() {
//         this.setState({
//             name: "xyz"
//         })
//     }

//     render() {
//         return (

//             <div>
//                 <p> {this.state.name}</p>

//                 <button onClick={this.updateState.bind(this)}>change</button>
//             </div>

//         )
//     }
// }
// export default EventBind;


// import React, { Component } from "react";

// class EventBind extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//             name: "abc"
//         }
//         this.updateState = this.updateState.bind(this);
//     }
//     updateState() {
//         this.setState({
//             name: "xyz"
//         })
//     }

//     render() {
//         return (

//             <div>
//                 <p> {this.state.name}</p>

//                 <button onClick={this.updateState}>change</button>
//             </div>

//         )
//     }
// }
// export default EventBind;