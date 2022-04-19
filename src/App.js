import { useState } from 'react';
import './App.css';
import Derection from './Derection/Derection';
import MyComponent from './MyComponent/MyComponent';


function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setdestination] = useState('');

  const displyDestination = event => {
    event.previentDefault()
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setOrigin(start);
    setdestination(end);
  }
  return (
    <div className="App">
      <form onScroll={displyDestination}>
        <input type="text" name='origin' required />
        <br />
        <input type="text" name='destination' required />
        <br />
        <input type="submit" value="Show Destination" />
      </form>
      {/* <MyComponent></MyComponent> */}
      <Derection origin={origin} destination={destination}></Derection>

    </div>
  );
}

export default App;
