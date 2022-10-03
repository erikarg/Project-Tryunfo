import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="formProps">
        <h2>Adicionar nova carta</h2>
        <form className="form">
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-input"
              id="cardDescription"
              rows="7"
              cols="33"
              maxLength="250"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare">
            Raridade
            <select
              name="rarity"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          {hasTrunfo ? (
            'Você já tem um Super Trunfo em seu baralho'
          ) : (
            <label htmlFor="cardTrunfo">
              Super Trybe Trunfo
              <input
                type="checkbox"
                id="cardTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )}

          <button
            type="submit"
            id="saveButton"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
