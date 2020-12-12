import React from 'react';
import PropTypes from 'prop-types';

function WishlistItem(props) {
  return (
    <div className="wishlist-item" onClick={props.onClick}>
      {props.name}
      <button className="edit-button" onClick={props.onEdit}>Modifica</button>
      <button className="delete-button" onClick={props.onDelete}>Cancella</button>
    </div>
  );
}

WishlistItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
}

export default WishlistItem;