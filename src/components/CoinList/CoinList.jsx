import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';


const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-table;
    font-size: 1.3rem;
    background-size: 100%;
    background-repeat: repeat;
    background-image: linear-gradient(45deg, #00FFA3, #03E1FF, #DC1FFF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;


export default function  CoinList(props) {
    return (
        <Table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            {props.showBalance ? <th>Balance</th> : null}
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.coinData.map( ({key, name, ticker, price, balance}) => 
                <Coin key={key}
                    handleRefresh={props.handleRefresh}
                    name={name} 
                    ticker={ticker} 
                    showBalance={props.showBalance}
                    balance={balance}
                    price={price}
                    tickerId={key}
                    />
                )
            }
        </tbody>
        </Table>
    )
}
