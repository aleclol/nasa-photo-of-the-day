import React from 'react'
import "./Container.css"

function Container (props) {


return (
    <div className='Container'>
        <img className='containerImg'  src={props.data.hdurl}/>
        <h2>{props.data.title}</h2>
        <p>{props.data.explanation}</p>
    </div>
)

}

export default Container