// Write your Character component here
import React from "react"
import styled from "styled-components"

export default function Character(props) {
    console.log('look', props)

    return (
        <CharacterStyle>
            <Name>{props.name}</Name>
            <h2>{props.birth_year}</h2>
            <div className="bottom">
                <p>Has been in {props.films} movies</p>
                <p>Starships{props.starships}</p>
                <p>Vehicles</p>
            </div>
        </CharacterStyle>
    )
};

const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #529752;
`
const Name = styled.h2`
    color: red;
    font-size: bolder;
    opacity: 50%;
`