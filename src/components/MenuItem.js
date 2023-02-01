import { PropTypes } from 'prop-types';
import { useState } from 'react';
import './MenuItem.css';

const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const {
    id,
    name,
    price,
    image,
    ingredients,
  } = item;

  return (
    <div
      key={id}
      className="column is-quarter animate__animated animate__delay-1s animate__zoomIn"
    >
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">
                <span className="icon">
                  <i className="fas fa-dollar-sign" />
                </span>
                {price}
              </p>
            </div>
          </div>
          <div className="content">
            {ingredients}
            <hr className="menu-item-divider has-background-grey-lighter" />
            <div className="buttons is-right">
              <input type="number" className="column is-half input button is-small" min="1" max="10" defaultValue="1" onChange={(e) => setQuantity(e.target.value)} />
              <button type="button" className="button is-success" onClick={() => addToCart(item, quantity)}>
                Add to cart
              </button>
            </div>
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
  addToCart: PropTypes.func.isRequired,
};

export default MenuItem;
