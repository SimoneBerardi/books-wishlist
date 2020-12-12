import React from 'react';
import getMockData from '../_shared/Utilities';
import WishlistItem from './WishlistItem';
import AddButton from '../_shared/components/AddButton';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = getMockData();
  }

  render() {
    const wishlists = this.state.wishlists.map(item => {
      const id = item.id;
      const name = item.name;
      return (
        <WishlistItem
          key={id}
          name={name}
          onClick={() => this.openWishList(id)}
          onEdit={(e) => this.editWishlist(e, id)}
          onDelete={(e) => this.deleteWishlist(e, id, name)}
        ></WishlistItem>
      )
    });
    return (
      <div className="wishlist-list">
        <div className="wishlist-list-container">
          {wishlists}
        </div>
        <div className="wishlist-list-footer">
          <AddButton onClick={() => this.addWishlist()}></AddButton>
        </div>
      </div>
    )
  }

  openWishList(id) {
    alert("TODO - open wishlist id: " + id);
  }

  addWishlist() {
    alert("TODO - add wishlist");
  }

  editWishlist(event, id) {
    event.stopPropagation();
    alert("TODO - edit wishlist id: " + id);
  }

  deleteWishlist(event, id, name) {
    event.stopPropagation();
    let confirmed = confirm("Vuoi cancellare la wishlist: " + name + "?");
    if (confirmed == true) {
      const wishlists = this.state.wishlists;
      const wishlist = wishlists.find(o => o.id === id);
      wishlists.splice(wishlists.indexOf(wishlist), 1);
      this.setState({
        wishlists: wishlists
      });
    }
  }
}

export default Homepage;