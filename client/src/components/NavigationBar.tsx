import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/tamuic/home">New Specimen</Link>
        </li>
        <li>
          <Link to="/CollectingEvent/CollectingEvent">New Collecting Event</Link>
        </li>
        <li>
          <Link to="/Geography/Geography">New Geography</Link>
        </li>
        <li>
          <Link to="/Georeferencing/PickLocality">Georeferencing</Link>
        </li>
        <li>
          <Link to="/ControlPanel">Control Panel</Link>
        </li>
      </ul>
      <ul>
        <li className="logout">
          <Link to="/logout">LOG OFF</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
