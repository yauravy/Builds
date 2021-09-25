import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';
import './App.css';
import logo from './solana.png';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="solana logo" className="App-logo"/>
        <h1 className="titles">
          Gold Exchange
        </h1>
      </header>
      <AccountBalance amount={10000} />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={45000.99} />
          <Coin name="Ethereum" ticker="ETH" price={3800.99} />
          <Coin name="Solana" ticker="SOL" price={160.99} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
