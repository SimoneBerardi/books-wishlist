import React from 'react';
import '../shared/Utilities';
import getMockData from '../shared/Utilities';

class WishlistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = getMockData();
  }

  render() {
    const wishlists = this.state.wishlists.map(item => {
      const id = item.id;
      const name = item.name;
      return (
        <li key={id}>
          <div>{name}</div>
        </li>
      )
    });
    return (
      <div className="wishlist-list">
        <ul>{wishlists}</ul>
      </div>
    )
  }
}

export default WishlistList;