import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardContainer = styled.div``;

const Cards = props => {
  return (
    <CardContainer className="cards-container">
      {props.cards.map((card, index) => {
        return <Card card={card} key={index} />
      })}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </CardContainer>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;