import React from "react"
import styled from 'styled-components'
import nasaWorm from '../../Assets/NASA_Worm_logo.svg'

const HeaderOuterDiv = styled.div`
    background-color: white;
    border-bottom: solid lightgray 1px;
`
const HeaderInnerDiv = styled.div`
    width: 500px;
    display: flex;
    justify-content:space-between;
    margin: 0% 33%;
`

const H1 = styled.h1`
    font-size: 3rem;
    font-family: 'Ubuntu', sans-serif;
    color: crimson;
`

const Img = styled.img`
    height: 24px;
    padding: 5.5% 0;
`

function Header (){

return (
    <HeaderOuterDiv>
        <HeaderInnerDiv>
            <Img className="headerImg" src={nasaWorm} />
            <H1>APOD</H1>
        </HeaderInnerDiv>
    </HeaderOuterDiv>
)

}

export default Header