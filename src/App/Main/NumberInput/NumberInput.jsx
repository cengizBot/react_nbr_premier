import React from 'react';
import PropTypes from 'prop-types';
import './NumberInput.css';

NumberInput.propTypes = {
  number: PropTypes.number,
  setNumber: PropTypes.func
};
function NumberInput({ setNumber }) {
  /**
   * Lors d'un changement dans le input, on transforme la valeur en nombre
   * et on l'envoie via setNumber
   */
  function onChangeHandler(event) {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      setNumber(0);
    } else {
      setNumber(parsedValue);
    }
  }

  return (
    <p>
      <input className="NumberInput_input" maxLength={9} onChange={onChangeHandler} />
    </p>
  );
}

export default NumberInput;
