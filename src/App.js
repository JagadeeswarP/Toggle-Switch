import React, { useState } from 'react';
import './App.css';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`app-container ${isToggled ? 'dark' : 'light'}`}>

      <div className="toggle-container">
        <label className="switch-label">
          <input
            type="checkbox"
            checked={isToggled}
            onChange={toggleSwitch}
            className="switch-input"
          />
          <span className="switch-slider">
            <span className="switch-knob" />
          </span>
          <span className="mode-label">
            {isToggled ? 'Dark Mode' : 'Light Mode'}
          </span>
        </label>
      </div>

      <div className="content">
        <h1>Dragon Ball Z</h1>
        <p>
          Dragon Ball Z is a legendary anime that follows the adventures of <b>Goku, Jagadeeswar</b> and his allies
          as they defend Earth from powerful villains like Frieza, Cell, and Majin Buu.
          With intense battles, emotional arcs, and iconic transformations, it’s one of the
          most influential anime series of all time.
        </p>
      </div>
    </div>
  );
}

export default App;
