// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const items =[
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      }
  
    ];
    

    return (
      // <div className="App">
      //   <h1> Orders recently created </h1>
      //   <Order order={headphone}/>
      //   <Order order={energyDrink} />
      // </div>
      //Exercicio 2 forma dinamica
      <div className="App">
        <h1> Orders recently created </h1>
        { items.map((item) => <Order key={item.id} order={item}/> ) }
      </div>
    );
  }
}

export default App;
