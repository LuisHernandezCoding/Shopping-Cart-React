import { PropTypes } from 'prop-types';

import MenuItem from '../components/MenuItem';

const Cart = ({ cartMethods }) => {
  const {
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    getCart,
    clearCart,
  } = cartMethods;

  const itemMethods = {
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    getCart,
  };

  const cart = getCart();

  return (
    <div className="hero has-background-primary is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
            Cart
          </h1>
          <p className="subtitle is-5 has-text-white has-text-centered animate__animated animate__delay-1s animate__bounceIn has-shadow">
            You have
            {' '}
            {cart.length}
            {' '}
            items in your cart.
          </p>
          <hr className="has-shadow animate__animated animate__delay-1s animate__fadeInUp" />
          <div className="columns is-centered">
            <div className="column is-7">
              <h1 id="cart-items" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
                Cart Items
              </h1>
              <div className="columns is-centered is-multiline">
                {cart.map((item) => (
                  <div className="column is-half" key={item.id}>
                    <MenuItem item={item} itemMethods={itemMethods} />
                  </div>
                ))}
              </div>
            </div>
            <div className="column is-5 animate__animated animate__delay-1s animate__zoomIn">
              <h1 id="cart-items" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
                Cart Summary
              </h1>
              <div className="card has-background-black has-text-white">
                <header className="card-header has-background-grey-dark">
                  <p className="card-header-title has-text-white">
                    Items
                  </p>
                  <div className="buttons is-centered">
                    <button
                      type="button"
                      className="button is-danger"
                      onClick={() => clearCart()}
                    >
                      Clear Cart
                    </button>
                  </div>
                </header>
                <div className="card-content">
                  <div className="content">
                    <table className="table is-fullwidth is-narrow has-background-grey-dark has-text-white has-text-centered">
                      <thead>
                        <tr className="has-background-grey">
                          <th>Item</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td width="40%">
                              <div className="field has-addons">
                                <div className="control">
                                  <button
                                    type="button"
                                    className="button is-danger"
                                    onClick={() => {
                                      if (item.quantity > 1) {
                                        cartMethods.updateItemQuantity(item, item.quantity - 1);
                                      } else {
                                        cartMethods.removeItemFromCart(item);
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
                                    value={item.quantity}
                                    readOnly
                                  />
                                </div>
                                <div className="control">
                                  <button
                                    type="button"
                                    className="button is-success"
                                    onClick={() => cartMethods
                                      .updateItemQuantity(item, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>
                              $
                              {(item.price * item.quantity).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <div className="media">
                    <span className="icon is-large">
                      <i className="fas fa-shopping-cart fa-2x" />
                    </span>
                    <div className="media-left">
                      <p className="title is-3 has-text-white">
                        Total:
                      </p>
                    </div>
                    <div className="media-content has-text-centered">
                      <p className="title is-3 has-text-success">
                        $
                        {cart
                          .reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                      </p>
                    </div>
                    <div className="media-right">
                      <div className="buttons is-centered">
                        <button
                          type="button"
                          className="button is-success"
                          onClick={() => cartMethods.checkoutCart()}
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartMethods: PropTypes.shape({
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
    updateItemQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    checkoutCart: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default Cart;
