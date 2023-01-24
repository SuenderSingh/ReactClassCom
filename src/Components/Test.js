import axios from 'axios'
import React, { useState } from 'react'

function Test() {

    [post,setPost ] = useState([]);
    
   const  fetchData = () =>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res);
            setPost(res.data.title)
        })
        .catch(error =>{
console.log(error);
        })
    }
  return (
    <div>
    <button onClick={fetchData}>call api</button>
    {
        post.map((value) =>{
           return(
            <div> {value.title} </div>)
        })
    }
    
    </div>
  )
}

export default Test