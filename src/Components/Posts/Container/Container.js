import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    background-color: rgb(238, 238, 238);
    width: 500px;
    border: solid rgb(205, 205, 205) 1px;
    border-radius: 3px;
    margin: 1% 33%;
    overflow: auto;
`

const ContainerImg = styled.img`
    width: 100%;
`

const Header2 = styled.h2`
    font-size: 2rem;
    font-family: 'Ubuntu', sans-serif;
    color: crimson;
    text-align: center;
`

const Paragraph = styled.p`
    padding: 1px 15px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: left;
`

function Container (props) {

const {url, title, copyright, date, explanation, hdurl, key} = props

return (
    <ContainerDiv>
        <ContainerImg className='containerImg'  src={url}/>
        <Header2>{title}</Header2>
        {copyright? <Paragraph>By: {copyright}</Paragraph>: null}
        <Paragraph>{date}</Paragraph>
        <Paragraph>{explanation}</Paragraph>
    </ContainerDiv>
)

}

export default Container