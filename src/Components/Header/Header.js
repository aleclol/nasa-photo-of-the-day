import React from "react"
import './Header.css'
import nasaWorm from '../../Assets/NASA_Worm_logo.svg'

function Header (){

return (
    <div className="headerDiv">
        <div>
            <img className="headerImg" src={nasaWorm} />
            <h1>APOD</h1>
        </div>
    </div>
)

}

export default Header