// import React from "react";

// const UpdatedComponent = OriginalComponent =>
// {
//     class NewComponent extends React.Component
//     {

//         constructor(props) {
//             super(props)
    
//             this.state = {
//                 count: 0
//             }
//         }
//         ChangeCount = () => {
//             this.setState(prevouseCount => {
//                 return { count: prevouseCount.count + 1 }
//             })
//         }

//         render()
//         {
//             return <OriginalComponent count ={this.state.count} ChangeCount={this.ChangeCount} />
//         }
//     }

//     return NewComponent
// }

// export default UpdatedComponent;