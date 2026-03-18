import Products from './Products';

describe('Products', () => {
  it('has favoritePizzas array', () => {
    expect(Array.isArray(Products.favoritePizzas)).toBe(true);
    expect(Products.favoritePizzas.length).toBe(4);
  });

  it('has a pepperoni pizza', () => {
    const pepperoniPizza = Products.favoritePizzas.find((pizza) => pizza.name === 'Pepperoni Pizza');
    expect(pepperoniPizza).toBeDefined();
    expect(pepperoniPizza.price).toBe(10.99);
    expect(pepperoniPizza.ingredients).toBe('Pepperoni, mozzarella, tomato sauce and oregano');
  });

  it('has specialtyPizzas array', () => {
    expect(Array.isArray(Products.specialtyPizzas)).toBe(true);
    expect(Products.specialtyPizzas.length).toBe(4);
  });

  it('has a Texas BBQ pizza', () => {
    const texasBBQPizza = Products.specialtyPizzas.find((pizza) => pizza.name === 'Texas BBQ Pizza');
    expect(texasBBQPizza).toBeDefined();
    expect(texasBBQPizza.price).toBe(13.99);
    expect(texasBBQPizza.ingredients).toBe('Chicken, BBQ sauce, mozzarella, tomato sauce');
  });

  it('has sides array', () => {
    expect(Array.isArray(Products.sides)).toBe(true);
    expect(Products.sides.length).toBe(4);
  });

  it('has a mango boneless', () => {
    const mangoBoneless = Products.sides.find((side) => side.name === 'Mango Boneless');
    expect(mangoBoneless).toBeDefined();
    expect(mangoBoneless.price).toBe(7.99);
    expect(mangoBoneless.ingredients).toBe('Mango sauce, mozzarella, tomato sauce');
  });

  it('has drinks array', () => {
    expect(Array.isArray(Products.drinks)).toBe(true);
    expect(Products.drinks.length).toBe(4);
  });

  it('has a pepsi', () => {
    const pepsi = Products.drinks.find((drink) => drink.name === 'Pepsi');
    expect(pepsi).toBeDefined();
    expect(pepsi.price).toBe(1.99);
    expect(pepsi.ingredients).toBe('');
  });
});
