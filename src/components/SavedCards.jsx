import React from 'react';
import PropTypes from 'prop-types';

class SavedCards extends React.Component {
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
      <section className="savedCards">
        <div className="card">
          <h2 data-testid="name-card" className="cardName">{cardName}</h2>
          <p
            data-testid="description-card"
            className="cardDescriptionSaved"
          >
            {cardDescription}
          </p>
          <section className="savedAttributes">
            <p
              data-testid="attr1-card"
              className="attr1"
            >
              {cardAttr1}
            </p>
            <p
              data-testid="attr2-card"
              className="attr2"
            >
              {cardAttr2}
            </p>
            <p
              data-testid="attr3-card"
              className="attr3"
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
          <p data-testid="rare-card" className="cardRareSaved">{cardRare}</p>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
        </div>
      </section>
    );
  }
}

SavedCards.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default SavedCards;
