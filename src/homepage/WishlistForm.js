import React from 'react';
import ButtonsFooter from '../_shared/components/ButtonsFooter';

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  render() {
    return (
      <form className="wishlist-form">
        <label>
          Nome:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <ButtonsFooter onCancel={this.onCancel} onSave={this.onSave}></ButtonsFooter>
      </form>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  onCancel() {
    alert("TODO - route back to wishlist list");
  }

  onSave() {
    alert("TODO - route back to wishlist list with add action");
  }
}

export default WishlistForm;