import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="rightSide">
        <h1 className="cardTitle">Pré-visualização</h1>
        <div className="card">
          <h2 data-testid="name-card" className="cardName">{cardName}</h2>
          <p
            data-testid="description-card"
            className="cardDescription"
          >
            {cardDescription}
          </p>
          <section className="attributes">
            <p
              data-testid="attr1-card"
            >
              {cardAttr1}
            </p>
            <p
              data-testid="attr2-card"
            >
              {cardAttr2}
            </p>
            <p
              data-testid="attr3-card"
            >
              {cardAttr3}
            </p>
          </section>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="imageCard"
          />
          <p data-testid="rare-card" className="rare">{cardRare}</p>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
