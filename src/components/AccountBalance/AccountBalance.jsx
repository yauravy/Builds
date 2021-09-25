import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
   border-radius: 0 0 60px 0;
   background-image: linear-gradient(45deg, #00FFA3, #03E1FF, #DC1FFF );
   font-size: 1.5rem;
   text-align: left;
   padding: 1.5rem 0 1.5rem 5rem;
   width: 275px;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
              Balance: ${this.props.amount}   
            </Section>
        );
    }
}






AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}