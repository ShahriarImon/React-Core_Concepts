import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const carCollection = [
    { name: "Toyota", type: "Casual", color: "ArmyGreen" },
    { name: "BMW", type: "Luxury", color: "White" },
    { name: "mercedes benz", type: "Sport", color: "NavyBlue" },
    { name: "lamborghini", type: "Sport", color: "Yellow" }
  ]
  const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to react</p>
        <Counter></Counter>
        <User></User>
        <div style={flex}>

          {
            carCollection.map(carr => <Car car={carr}></Car>)
          }
          {/* <Car name ="Toyota" type ="Casual" color="ArmyGreen"></Car>
        <Car name ="BMW" type ="Luxury" color="White"></Car>
        <Car name ="mercedes benz" type ="Sport" color="NavyBlue"></Car> */}
        </div>
      </header>
    </div>
  );
}

function Car(props) {

  const carStyle = {
    border: '2px solid green',
    margin: '12px',
    padding: '10px'

  }

  const { name, type, color } = props.car;
  return (
    <div style={carStyle}>
      <p>I bought '{name}'</p>
      <p>It is '{type}' version</p>
      <p>I love '{color}'</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Like</button>
      <button onClick={() => setCount(count - 1)}>DisLike</button>
    </div>
  )
}

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      {
        users.map(user => <p>{user.name}  : {user.phone}</p>)
      }
    </div>
  )
}

export default App;
