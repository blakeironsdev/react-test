import React from 'react';
import './App.css';
import profileImage from './img/bb.photo.JPG'

function App() {
  return (
    <div className="App">
     <h1>React Demo</h1>
     <h2>Blake Irons</h2>
     <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
