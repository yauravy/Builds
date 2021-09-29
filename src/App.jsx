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
  state = {
    balance: 1000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 10,
        price: 10000.00
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 20,
        price: 3800.00
      },
      {
        name: 'Solana',
        ticker: 'SOL',
        balance: 1000,
        price: 1000.00
      },
      {
        name: 'Cardano',
        ticker: 'ADA',
        balance: 10000,
        price: 10.00
      }
    ]
  }

  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

    handleRefresh = (valueChangeTicker) => {
      const newCoinData = this.state.coinData.map( function( values ) {
        let newValues = { ...values};
        if (valueChangeTicker === values.ticker) {
          const randomPercentage = 0.995 + Math.random() * 0.1; 
                  newValues.price *= randomPercentage;
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance}
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} 
        />
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}


export default App;
