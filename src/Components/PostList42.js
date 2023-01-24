// import axios from 'axios'
// import React, { Component } from 'react'

//  class PostList42 extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         users : []
//       }
//     }

//     componentDidMount () {
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{

//     console.log(response);

//     this.setState ({
//         users : response.data

//     })
// })
// .catch(error => {

//     console.log(error);
// })


//     }
//   render() {
//     const { users } = this.state
//     return (
//     //     <ul>
//     //     {users.map(user => (
//     //       <li key={user.id}>{user.title}</li>
//     //     ))}
//     //   </ul>

//     <ul>
//        { users.length ? 
//         users.map(post => <div key ={post.id} >{post.title}</div>) : null
//        }
//         </ul>
//     )
//   }
// }

// export default PostList42