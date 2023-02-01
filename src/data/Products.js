import peperoni from '../images/peperoni.jpg';
import hawaiian from '../images/hawaiian.jpg';
import meat from '../images/meat.jpg';
import veggie from '../images/veggie.jpg';
import texasBBQ from '../images/texasBBQ.jpg';
import cheesyBBQ from '../images/cheesyBBQ.jpg';
import honolulu from '../images/honolulu.jpg';
import deluxe from '../images/deluxe.jpg';
import bonelessMango from '../images/bonelessMango.jpg';
import cheesyBread from '../images/cheesyBread.jpg';
import friedPotatoes from '../images/friedPotatoes.jpg';
import wingsBBQ from '../images/wingsBBQ.jpg';
import pepsi from '../images/pepsi.jpg';
import mirinda from '../images/mirinda.jpg';
import lipton from '../images/lipton.jpg';
import water from '../images/water.jpg';

const Products = {
  favoritePizzas: [
    {
      id: 1,
      name: 'Pepperoni',
      price: 10.99,
      image: peperoni,
      ingredients: 'Pepperoni, mozzarella, tomato sauce and oregano',
    },
    {
      id: 2,
      name: 'Hawaiian',
      price: 12.99,
      image: hawaiian,
      ingredients: 'Ham, pineapple, mozzarella, tomato sauce',
    },
    {
      id: 3,
      name: 'Meat Lovers',
      price: 14.99,
      image: meat,
      ingredients: 'Pepperoni, sausage, ham, bacon, mozzarella, tomato sauce',
    },
    {
      id: 4,
      name: 'Veggie',
      price: 11.99,
      image: veggie,
      ingredients: 'Mushrooms, onions, green peppers, black olives, mozzarella, tomato sauce',
    },
  ],
  specialtyPizzas: [
    {
      id: 5,
      name: 'Texas BBQ',
      price: 13.99,
      image: texasBBQ,
      ingredients: 'Chicken, BBQ sauce, mozzarella, tomato sauce',
    },
    {
      id: 6,
      name: 'Cheesy BBQ',
      price: 14.99,
      image: cheesyBBQ,
      ingredients: 'Cheese, BBQ sauce, mozzarella, tomato sauce',
    },
    {
      id: 7,
      name: 'Honolulu',
      price: 13.99,
      image: honolulu,
      ingredients: 'Ham, pineapple, mozzarella, tomato sauce',
    },
    {
      id: 8,
      name: 'Deluxe',
      price: 15.99,
      image: deluxe,
      ingredients: '3 meats, 3 cheeses, mozzarella, tomato sauce',
    },
  ],
  sides: [
    {
      id: 9,
      name: 'Mango Boneless Wings',
      price: 7.99,
      image: bonelessMango,
    },
    {
      id: 10,
      name: 'Cheesy Bread',
      price: 4.99,
      image: cheesyBread,
    },
    {
      id: 11,
      name: 'Fried Potatoes',
      price: 3.99,
      image: friedPotatoes,
    },
    {
      id: 12,
      name: 'Wings (BBQ)',
      price: 6.99,
      image: wingsBBQ,
    },
  ],
  drinks: [
    {
      id: 13,
      name: 'Pepsi',
      price: 1.99,
      image: pepsi,
    },
    {
      id: 14,
      name: 'Mirinda',
      price: 1.99,
      image: mirinda,
    },
    {
      id: 15,
      name: 'Lipton',
      price: 1.99,
      image: lipton,
    },
    {
      id: 16,
      name: 'Water',
      price: 1.49,
      image: water,
    },
  ],
};

export default Products;
