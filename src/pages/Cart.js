import { PropTypes } from 'prop-types';

const Cart = ({ cart, cartMethods }) => (
  <div className="hero has-background-primary is-fullwidth">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-7">
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
            <h1 id="cart-items" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
              Cart Items
            </h1>
            <div className="columns is-centered is-multiline">
              {cart.map((item) => (
                <div key={item.id} className="column is-6 animate__animated animate__delay-1s animate__zoomIn">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={item.image} alt={item.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{item.name}</p>
                          <p className="subtitle is-6">
                            $
                            {item.price}
                          </p>
                        </div>
                        <div className="media-right">
                          <p className="title is-4">
                            X
                            {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="content">
                        <div className="buttons is-right">
                          <button
                            type="button"
                            className="button is-danger"
                            onClick={() => cartMethods.removeItemFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="column is-5 animate__animated animate__delay-1s animate__zoomIn">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Cart Summary
                </p>
                <div className="buttons is-centered">
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={() => cartMethods.clearCart()}
                  >
                    Clear Cart
                  </button>
                </div>
              </header>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">
                    Items
                  </p>
                  <table className="table is-fullwidth is-narrow is-bordered">
                    <thead>
                      <tr>
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
                    <p className="title is-3">
                      Total:
                    </p>
                  </div>
                  <div className="media-content has-text-centered">
                    <p className="title is-3 has-text-success">
                      $
                      {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  cartMethods: PropTypes.shape({
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
    updateItemQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    checkoutCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default Cart;
