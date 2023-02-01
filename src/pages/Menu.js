import Products from '../data/Products';
import MenuItem from '../components/MenuItem';

const Menu = () => (
  <div className="hero has-background-primary is-fullwidth">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
          Menu
        </h1>
        <p className="subtitle is-5 has-text-white has-text-centered animate__animated animate__delay-1s animate__bounceIn has-shadow">
          We have a wide variety of pizzas, sides, and drinks to choose from.
        </p>
        <hr className="has-shadow animate__animated animate__delay-1s animate__fadeInUp" />
        <div>
          <div>
            <h1 id="favorite-pizzas" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
              Favorite Pizzas
            </h1>
            <div className="columns is-centered is-multiline">
              {Products.favoritePizzas.map((pizza) => (
                <MenuItem key={pizza.id} item={pizza} />
              ))}
            </div>
          </div>
          <hr className="has-shadow animate__animated animate__delay-1s animate__fadeInUp" />
          <div>
            <h1 id="specialty-pizzas" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
              Specialty Pizzas
            </h1>
            <div className="columns is-centered is-multiline">
              {Products.specialtyPizzas.map((pizza) => (
                <MenuItem key={pizza.id} item={pizza} />
              ))}
            </div>
          </div>
          <hr className="has-shadow animate__animated animate__delay-1s animate__fadeInUp" />
          <div>
            <h1 id="sides" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
              Sides
            </h1>
            <div className="columns is-centered is-multiline">
              {Products.sides.map((side) => (
                <MenuItem key={side.id} item={side} />
              ))}
            </div>
          </div>
          <hr className="has-shadow animate__animated animate__delay-1s animate__fadeInUp" />
          <div>
            <h1 id="drinks" className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn has-shadow">
              Drinks
            </h1>
            <div className="columns is-centered is-multiline">
              {Products.drinks.map((drink) => (
                <MenuItem key={drink.id} item={drink} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
