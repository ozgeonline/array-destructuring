import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import animals,{useAnimals} from './data';
import cars from './practice';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const [cat,dog] = animals;
// console.log(dog);

// const {name:dogName , sound:dogSound} = dog;
// console.log(dogName);
// console.log(dogSound);

//*--name,sound tanımsızsa tanımlanan değişkenler aktarılır
// const {name = "Fluffy", sound = "Purr"} = cat;
// console.log(name);
// console.log(sound);

// const {feedingRequirements:{food,water}} = cat;
// console.log(food);
// console.log(water);

// Details();
// function Details(){
//   const [animal, makeSound] = useAnimals(cat);
//   console.log(animal);
//   makeSound();
// }

const [honda,tesla] = cars;
const {speedStats:{topSpeed:hondaTopSpeed}} = honda;
const {coloursByPopularity:[hondaTopColour]} = honda;

const {speedStats:{topSpeed:teslaTopSpeed}} = tesla;
const {coloursByPopularity:[teslaTopColour]} = tesla;


root.render(
  <React.StrictMode>
    {/* <App /> */}
    <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
       <th>Top Color</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>
  </React.StrictMode>
);

reportWebVitals();
