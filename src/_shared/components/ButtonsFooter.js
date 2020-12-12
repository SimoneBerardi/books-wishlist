import React from 'react';
import PropTypes from 'prop-types';

function ButtonsFooter(props) {
  return (
    <div className="buttons-footer">
      <button onClick={props.onCancel}>Cancella</button>
      <button onClick={props.onSave}>Salva</button>
    </div>
  )
}

ButtonsFooter.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func
}

export default ButtonsFooter;