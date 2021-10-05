import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
    border: 2px solid black;
    width: 25vh;
    flex-direction: row;
    border-radius: 17px;

`;

const Td = styled.td`
    flex-direction: row;
    border: 2px solid black;
    width: 25vh;
    border-radius: 17px;

`;

const Td1 = styled.td`
    flex-direction: row;
    border: 2px solid black;
    width: 35vh;
    border-radius: 17px;

`;

const Td2 = styled.td`
    display: block flex;
    flex-direction: row;
    border: 2px solid black;
    width: 55vh;
    border-radius: 17px;

`;

const Td3 = styled.td`
    border: 2px solid black;
    width: 25vh;
    flex-direction: row;
    border-radius: 17px;

`;

const Button = styled.button`

    border-radius: 5px;
    flex-direction: row;
    background-size: 100%;
    background-repeat: repeat;
    background-image: linear-gradient(45deg, #00FFA3, #03E1FF, #DC1FFF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    border-radius: 17px;

`;

const Td4 = styled.td`
    flex-direction: row;
    border: 2px solid black;
    width: 25vh;
    border-radius: 17px;
`;

export default function Coin(props) {
       
    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);

    }
    return (
        <Tr>
            <Td>{props.name}</Td>
            <Td1>{props.ticker}</Td1>
            <Td2>${props.price}</Td2>
            {props.showBalance ? <Td4>{props.balance}</Td4> : null}
            <Td3>
                <form action="#" method="POST">
                    <Button onClick={handleClick}>Refresh</Button>
                </form>
            </Td3>
        </Tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,      
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
