import React from 'react'

function ChildCom(props) {
  return (
    <div> <button onClick={props.testChange}> Click</button></div>
  )
}

export default ChildCom