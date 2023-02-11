import React, {useEffect} from 'react'

function Data (props){
    useEffect(()=> {
        axios
            .get("https://api.nasa.gov/planetary/apod")
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])
}

export default Data