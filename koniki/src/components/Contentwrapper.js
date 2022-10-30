import React from 'react'
import "./Contentwrapper.css"

function Contentwrapper(props) {
  return (
    <div className='m-4 wrapper'>{props.children}</div>
  )
}

export default Contentwrapper