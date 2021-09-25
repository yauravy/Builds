import React, { Component } from 'react';
import './coin.css';
import PropTypes from 'prop-types'

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
    /*
    componentDidMount(){
        const callback = () => {
           // set the state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.1;

            this.setState( function(oldState) {
                return {
                    price: oldState.price * randomPercentage
                }
            })
        }
        setInterval( callback, 1000);
    }     
    */
       
    handleClick(event) {
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.1; 
        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        });
    }

    render () {
        return (
            <tr className="coin-row">
              <td className="a">{this.props.name}</td>
              <td className="b">{this.props.ticker}</td>
              <td className="c">${this.state.price}</td>
              <td>
                  <form action="#" method="POST">
                      <button onClick={this.handleClick}>Refresh</button>
                  </form>
              </td>
            </tr>
        );
    }    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,      
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
