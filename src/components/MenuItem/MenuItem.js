import { PropTypes } from 'prop-types';
import { useState } from 'react';

const MenuItem = ({ item, itemMethods, cart }) => {
  const [quantity, setQuantity] = useState(1);

  const {
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
  } = itemMethods;

  const {
    id,
    name,
    price,
    image,
    ingredients,
  } = item;

  return (
    <div
      className="animate__animated animate__delay-1s animate__zoomIn"
    >
      <div className="card item has-background-black has-text-white">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5 has-text-white is-flex is-justify-content-space-between">
                {name}
                <span className="has-text-white is-flex is-align-items-center">
                  <span className="icon">
                    <i className="fas fa-dollar-sign" />
                  </span>
                  {price}
                </span>
              </p>
            </div>
          </div>
          <div className="content">
            {ingredients}
            <hr className="menu-item-divider has-background-grey-lighter" />
            {cart.find((item) => item.id === id) ? (
              <div className="field has-addons">
                <div className="control">
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={() => {
                      if (cart.find((item) => item.id === id).quantity > 1) {
                        // make async call to update quantity
                        const newQuantity = cart.find((item) => item.id === id).quantity - 1;
                        setQuantity(newQuantity);
                        updateItemQuantity(item, newQuantity);
                      } else {
                        removeItemFromCart(item);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={cart.find((item) => item.id === id).quantity}
                    readOnly
                  />
                </div>
                <div className="control">
                  <button
                    type="button"
                    className="button is-success"
                    onClick={
                      () => {
                        setQuantity(cart.find((item) => item.id === id).quantity + 1);
                        updateItemQuantity(item, cart.find((item) => item.id === id).quantity + 1);
                      }
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ) : (
              <div className="buttons is-right">
                <input
                  type="number"
                  className="column is-half input button is-small"
                  min="1"
                  max="10"
                  defaultValue="1"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  type="button"
                  className="button is-success"
                  onClick={() => addItemToCart({
                    id,
                    name,
                    price,
                    quantity,
                    image,
                    ingredients,
                  })}
                >
                  Add to cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
  }).isRequired,
  itemMethods: PropTypes.shape({
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
    updateItemQuantity: PropTypes.func.isRequired,
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default MenuItem;
