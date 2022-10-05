import React, {useState, useEffect} from 'react';
import './AvailableMeals.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//     {
//       id: 'm5',
//       name: 'Swedish pizza',
//       description: 'Tasty and delicious',
//       price: 15.99,
//     },
//   ];

function AvailableMeals() {
  const[meals, setMeals] = useState([]);

  const fetchMeals = async() => {
    try{
      const response = await fetch ('https://food-order-app-dab3c-default-rtdb.firebaseio.com/meals.json');
      const data = await response.json();
      const fetchedMeals = [];

      for(const key in data){
        const Meals ={
          id: key,
          ...data[key]
        }

        fetchedMeals.push(Meals)
      }

      setMeals(fetchedMeals);
    } catch (err){
      
    }
    };

    useEffect(()=> {
     fetchMeals();
    }, [])

  return (
    <section className='meals'>
        <Card>
        <ul>
            {meals.map(meal =>
                <MealItem 
                key={meal.id}
                id={meal.id}
                name={meal.name} 
                description={meal.description} 
                price={meal.price}/>
            )}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals