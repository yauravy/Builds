import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
    border: 2px solid black;
    width: 25vh;
    flex-direction: row;
`;

const Td = styled.td`
    flex-direction: row;
    border: 2px solid #00FFA3;
    width: 25vh;
`;

const Td1 = styled.td`
    flex-direction: row;
    border: 2px solid #03E1FF;
    width: 35vh;
`;

const Td2 = styled.td`
    display: block flex;
    flex-direction: row;
    border: 2px solid #DC1FFF;
    width: 35vh;
`;

const Td3 = styled.td`
    border: 2px solid black;
    width: 25vh;
    flex-direction: row;
`;

const Button = styled.button`
    border-radius: 5px;
    border: 2px solid #DC1FFF;
    flex-direction: row;
    background-size: 100%;
    background-repeat: repeat;
    background-image: linear-gradient(45deg, #00FFA3, #03E1FF, #DC1FFF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
       
    handleClick(event) {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);

    }

    render () {
        return (
            <Tr>
              <Td>{this.props.name}</Td>
              <Td1>{this.props.ticker}</Td1>
              <Td2>${this.props.price}</Td2>
              <Td3>
                  <form action="#" method="POST">
                      <Button onClick={this.handleClick}>Refresh</Button>
                  </form>
              </Td3>
            </Tr>
        );
    }    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,      
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
