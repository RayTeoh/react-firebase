
import React from 'react'
import './Homepage.css'
import styled from 'styled-components'

const Title = styled.h1`
    color:${props => props.condition ? 'red' : 'green'};
`
const SubTitle = styled.p`
    color:blue;
`

const condition = true

const HomePage = (props) => {
    return (
        <div>
            <h1 className="title"> Home Page </h1>
            {condition ? <Title>This is style component</Title> :<SubTitle>This is a subtitle</SubTitle>
            }
         </div>
    )
}

export default HomePage;