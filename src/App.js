import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import SavedCards from './components/SavedCards';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  savedCards: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const savedCards = this.state;
    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      savedCards: [...previous.savedCards, savedCards],
      hasTrunfo: [...previous.savedCards, savedCards].some(
        () => savedCards.cardTrunfo,
      ),
    }));
  };

  enableButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const minimum = 0;
    const maximum = 90;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const maxSum = 210;
    const stringConditions = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ].every((condition) => condition !== '');
    const numberConditions = [
      Number(cardAttr1),
      Number(cardAttr2),
      Number(cardAttr3),
    ].every((condition) => condition >= minimum && condition <= maximum);
    if (stringConditions && numberConditions && sum <= maxSum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const validation = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState(
      {
        [target.id]: validation,
      },
      () => this.enableButton(),
    );
  };

  render() {
    const value = this.state;
    return (
      <div className="father">
        <section className="son">
          <Form
            cardName={ value.cardName }
            cardDescription={ value.cardDescription }
            cardAttr1={ value.cardAttr1 }
            cardAttr2={ value.cardAttr2 }
            cardAttr3={ value.cardAttr3 }
            cardImage={ value.cardImage }
            cardRare={ value.cardRare }
            cardTrunfo={ value.cardTrunfo }
            hasTrunfo={ value.hasTrunfo }
            isSaveButtonDisabled={ value.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ value.cardName }
            cardDescription={ value.cardDescription }
            cardAttr1={ value.cardAttr1 }
            cardAttr2={ value.cardAttr2 }
            cardAttr3={ value.cardAttr3 }
            cardImage={ value.cardImage }
            cardRare={ value.cardRare }
            cardTrunfo={ value.cardTrunfo }
          />
        </section>
        {value.savedCards.length
          && <h2 className="savedCardsTitle">Todas as cartas</h2>}
        <section className="savedCardsBox">
          {value.savedCards.length ? value.savedCards.map((card) => (
            <SavedCards
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              key={ card.cardName }
            />
          )) : <h2>Não há cartas salvas</h2>}
        </section>
      </div>
    );
  }
}

export default App;
