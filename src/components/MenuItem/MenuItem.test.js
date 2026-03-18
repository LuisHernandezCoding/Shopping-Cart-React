import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem';

afterEach(cleanup);

const item = {
  id: 1,
  name: 'Test Item',
  price: 10,
  image: 'test.jpg',
  ingredients: 'Test ingredients',
  quantity: 1,
};

const cart = [];

const itemMethods = {
  addItemToCart: jest.fn(),
  removeItemFromCart: jest.fn(),
  updateItemQuantity: jest.fn(),
};

describe('MenuItem', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MenuItem item={item} itemMethods={itemMethods} cart={cart} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('addItemToCart should be called when Add to cart button is clicked', () => {
    const { getByText } = render(
      <MenuItem item={item} itemMethods={itemMethods} cart={cart} />,
    );
    fireEvent.click(getByText('Add to cart'));
    expect(itemMethods.addItemToCart).toHaveBeenCalled();
  });

  it('addItemToCart should be called with the correct quantity when Add to cart button is clicked', () => {
    const { getByText } = render(
      <MenuItem item={item} itemMethods={itemMethods} cart={cart} />,
    );
    const addCartButton = getByText('Add to cart');
    const input = addCartButton.previousSibling;
    fireEvent.change(input, { target: { value: 2 } });
    fireEvent.click(addCartButton);
    expect(itemMethods.addItemToCart).toHaveBeenCalledWith({
      id: 1,
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
      ingredients: 'Test ingredients',
      quantity: '2',
    });
  });

  it('removeItemFromCart should be called when - button is clicked', () => {
    cart.push(item);
    const { getByText } = render(
      <MenuItem item={item} itemMethods={itemMethods} cart={cart} />,
    );
    fireEvent.click(getByText('-'));
    expect(itemMethods.removeItemFromCart).toHaveBeenCalled();
  });

  it('updateItemQuantity should be called when + button is clicked', () => {
    cart.push(item);
    const { getByText } = render(
      <MenuItem item={item} itemMethods={itemMethods} cart={cart} />,
    );
    fireEvent.click(getByText('+'));
    expect(itemMethods.updateItemQuantity).toHaveBeenCalled();
  });
});
