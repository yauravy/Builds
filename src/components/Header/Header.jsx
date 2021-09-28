import React, { Component } from 'react';
import logo from '../../solana.png';
import styled from 'styled-components';

const Section = styled.header`
    padding-left: 10px;
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const H1 = styled.h1`
    font-size: 36px;
    padding-left: 20px;
    background-size: 100%;
    background-repeat: repeat;
    background-image: linear-gradient(45deg, #00FFA3, #03E1FF, #DC1FFF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

const IMG = styled.img`
    height: 10vmin;
    pointer-events: none;
`;


export default class Header extends Component {
    render() {
        return (
            <Section>
                <IMG src={logo} alt="solana logo"/>
                <H1>
                Gold Exchange
                </H1>
            </Section>
        )
    }
}
