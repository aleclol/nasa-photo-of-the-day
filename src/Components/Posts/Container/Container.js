import React from 'react'
import "./Container.css"

function Container (props) {

    // const {title, explanation, hdurl} = props
console.log(props)

return (
    <div className='Container'>
        <img className='containerImg'  src={props.hdurl}/>
        <h2>{props.title}</h2>
        <p>{props.explanation}</p>
    </div>
)

}

export default Container