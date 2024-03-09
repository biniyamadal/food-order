
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Salad',
    description: ' Mixed ingredients, frequently vegetables',
    price: 95.55,
  },
  {
    id: 'm2',
    name: 'Shiro',
    description: 'Top Ethiopian Dishes',
    price: 80.75,
  },
  {
    id: 'm3',
    name: 'Doro wot',
    description: 'Ethiopian traditional food',
    price: 350,
  },
  {
    id: 'm4',
    name: 'Burger and Pizza',
    description: 'Healthy...and sweet...',
    price: 270.99,
  },
  {
    id:'m5',
    name:'Fasting Firfir',
    description:'common fasting breakfast dish',
    price:99.99,
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;