import React from 'react';
import PropTypes from 'prop-types';

function AddButton(props) {
  return (
    <button onClick={props.onClick}>Aggiungi</button>
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func
}

export default AddButton;