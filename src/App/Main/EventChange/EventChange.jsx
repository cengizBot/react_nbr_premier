import React from 'react';
import PropTypes from 'prop-types';

EventChange.propTypes = {
  number: PropTypes.number
};

let array = new Array();

function EventChange({ number }) {
  array.push(number);
  if (isNaN(number - 5)) {
    number = 'Il faut mettre un chiffre';
  }

  if (array.length >= 5) {
    array = array.slice(4, 5);
  }

  console.log(array);

  return array.map((element) => <li key={element}>{element}</li>);
}

export default EventChange;
