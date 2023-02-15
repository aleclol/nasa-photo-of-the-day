import React from 'react'
import styled from 'styled-components'

const OuterDiv = styled.div`

`

const InnerDiv = styled.div`
    background-color: rgb(238, 238, 238);
    width: 500px;
    padding: 0px;
    border: solid rgb(205, 205, 205) 1px;
    border-radius: 3px;
    margin: 1% 33%;
`

const FormWrapper = styled.div`
    text-align: center;
    font-size: 3.5rem;
    font-family: 'Ubuntu', sans-serif;
    color: crimson;
    padding: 5px;
    display: flex;
    justify-content: center;
`

let startDate = '2022-02-02'
let endDate = '2022-02-15'

function DateRange(props){

return (
    <OuterDiv>
        <InnerDiv>
            <FormWrapper>
                <form name="DateRange">
                    <label>From </label>
                    <input type="date" 
                            name="startDate" 
                            value="2023-02-14"></input> 
                    <label> to </label>
                    <input type="date" 
                            name="endDate" 
                            value="2023-02-14"></input>
                    <button>Get Photos</button>
                </form>
            </FormWrapper>
        </InnerDiv>
    </OuterDiv>
)

}

export {startDate, endDate}
export default DateRange