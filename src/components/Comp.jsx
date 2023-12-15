import React from 'react'

function Comp(props) {
  return (
    <>
    <div>
      <button>{props.text}</button>
      {/* <button>Send</button> */}
      <p>{props.word}</p>
    </div>
    </>
  )
}

export default Comp
