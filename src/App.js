import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [count, setCount] = useState(0)
 
  return  (
      <div>
        <h3>Value of counter variable is: {count}</h3>
        <br/>
        <button onClick={
          ()=> setCount(count +1)
          }>
            Update Counter</button>

      </div>

  );
}

export default App;
