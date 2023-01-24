// // import React, { Component } from 'react'
// // import PurComponent from './PurComponent'
// // import RegCom from './RegCom'

// // class ParntCom extends Component {

// //     constructor(props) {
// //         super(props)

// //         this.state = {
// //             name: "surender"
// //         }
// //     }

// //     componentDidCatch() {
// //         setInterval(() => {
// //             this.setState({
// //                 name: "surender"
// //             })
// //         }, 2000)
// //     }


// //     render() {
// //         return (
// //             <div>ParntCom
// //                 <PurComponent name={this.state.name} />
// //                 <RegCom name={this.state.name} />

// //             </div>
// //         )
// //     }
// // }

// // export default ParntCom


// // memo component


// import React, { Component } from 'react'
// import MemoComp from './MemoComp'
// import PurComponent from './PurComponent'
// import RegCom from './RegCom'

// class ParntCom extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             name: "surender"
//         }
//     }

//     componentDidCatch() {
//         setInterval(() => {
//             this.setState({
//                 name: "surender"
//             })
//         }, 2000)
//     }


//     render() {
//         console.log("parent Component");
//         return (
//             <div>ParntCom
                
//                 <MemoComp name={this.state.name} />

//             </div>
//         )
//     }
// }

// export default ParntCom