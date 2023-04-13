import { useState } from 'react';
import './App.css';

function App() {
  const [isDaySwitch, setDaySwitch] = useState(false)


  return (
      <div>
        <div className="container">
          <div className="sky">
            <div className="sun"></div>
          </div>
        </div>
      </div>
  );
}

export default App;
