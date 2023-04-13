import { useState } from 'react';
import './App.css';

function App() {
  const [isDaySwitch, setDaySwitch] = useState(false)

  const handleDay = () => {
    setDaySwitch(!isDaySwitch)
  }

  return (
      <div>
        <div className="container">
          <div 
          className="sky"
          style={{backgroundColor: isDaySwitch ? 'blue' : 'black'}}
          >
            <div 
            className="sun"
            style={{backgroundColor: isDaySwitch ? 'yellow' : 'white'}}
            ></div>
          </div>
        </div>
        <div className="container">
        <button 
        className="btn"
        onClick={handleDay}
        >
          Switch</button>

        </div>
      </div>
  );
}

export default App;
