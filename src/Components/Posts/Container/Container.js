import React from 'react'
import "./Container.css"

function Container (props) {

const {url, title, copyright, date, explanation, hdurl} = props

return (
    <div className='Container'>
        <img className='containerImg'  src={url}/>
        <h2>{title}</h2>
        <p>By: {copyright}</p>
        <p>{date}</p>
        <p>{explanation}</p>
    </div>
)

}

export default Container