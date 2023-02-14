import React from 'react'
import Container from './Container/Container'

function Posts (props) {

const {data} = props;

    return(
        <div>
            {data.slice(0).reverse().map((apod) => {
            return <Container copyright={apod.copyright}
                            date={apod.date} 
                            explanation={apod.explanation}
                            hdurl={apod.hdurl}
                            title={apod.title}
                            url={apod.url}
                            key={data.date} />
        })}
        </div>
    )
}



export default Posts