import React from 'react';
import Header from './components/Header/Header';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';


const Div = styled.div`
  text-align: center;
  background-color:whitesmoke;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 10000.00
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 3800.00
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 1000.00
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 10.00
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

    handleRefresh(valueChangeTicker) {
      const newCoinData = this.state.coinData.map( function( {ticker, name, price} ) {
        let newPrice = price;
        if (valueChangeTicker === ticker) {
          const randomPercentage = 0.995 + Math.random() * 0.1; 
                  newPrice =  newPrice.price * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}


export default App;
