const Cart = () => (
  <section className="cart">
    <header>
      <h2>Your Cart</h2>
    </header>
    <div>
      Carts Items Placeholder
    </div>
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          total
          <span>
            $0
          </span>
        </h4>
      </div>
      <button className="btn clear-btn" type="button">
        clear cart
      </button>
    </footer>
  </section>
);

export default Cart;
