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
      name: 'Pepperoni Pizza',
      price: 10.99,
      image: peperoni,
      ingredients: 'Pepperoni, mozzarella, tomato sauce and oregano',
    },
    {
      id: 2,
      name: 'Hawaiian Pizza',
      price: 12.99,
      image: hawaiian,
      ingredients: 'Ham, pineapple, mozzarella, tomato sauce',
    },
    {
      id: 3,
      name: 'Meat Lovers Pizza',
      price: 14.99,
      image: meat,
      ingredients: 'Pepperoni, sausage, ham, bacon, mozzarella, tomato sauce',
    },
    {
      id: 4,
      name: 'Veggie Pizza',
      price: 11.99,
      image: veggie,
      ingredients: 'Mushrooms, onions, green peppers, black olives, mozzarella, tomato sauce',
    },
  ],
  specialtyPizzas: [
    {
      id: 5,
      name: 'Texas BBQ Pizza',
      price: 13.99,
      image: texasBBQ,
      ingredients: 'Chicken, BBQ sauce, mozzarella, tomato sauce',
    },
    {
      id: 6,
      name: 'Cheesy BBQ Pizza',
      price: 14.99,
      image: cheesyBBQ,
      ingredients: 'Cheese, BBQ sauce, mozzarella, tomato sauce',
    },
    {
      id: 7,
      name: 'Honolulu Pizza',
      price: 13.99,
      image: honolulu,
      ingredients: 'Ham, pineapple, mozzarella, tomato sauce',
    },
    {
      id: 8,
      name: 'Deluxe Pizza',
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
      ingredients: 'Mango sauce, mozzarella, tomato sauce',
    },
    {
      id: 10,
      name: 'Cheesy Bread',
      price: 4.99,
      image: cheesyBread,
      ingredients: 'Cheese, mozzarella, tomato sauce',
    },
    {
      id: 11,
      name: 'Fried Potatoes',
      price: 3.99,
      image: friedPotatoes,
      ingredients: 'Potatoes, mozzarella, tomato sauce',
    },
    {
      id: 12,
      name: 'Wings (BBQ)',
      price: 6.99,
      image: wingsBBQ,
      ingredients: 'BBQ sauce, mozzarella, tomato sauce',
    },
  ],
  drinks: [
    {
      id: 13,
      name: 'Pepsi',
      price: 1.99,
      image: pepsi,
      ingredients: '',
    },
    {
      id: 14,
      name: 'Mirinda',
      price: 1.99,
      image: mirinda,
      ingredients: '',
    },
    {
      id: 15,
      name: 'Lipton',
      price: 1.99,
      image: lipton,
      ingredients: '',
    },
    {
      id: 16,
      name: 'Water',
      price: 1.49,
      image: water,
      ingredients: '',
    },
  ],
};

export default Products;
