import './App.scss';
import React from 'react';
import Header from '../components/Header';
import {Outlet, Link} from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">

      <div className="header-container">
        <Header/>
      </div>
      
      <div className="sidenav-container">
        
      </div>
      
      <div className="app-content">
          <Outlet/>
      </div>
     
    </div>
  );
}

export default App;
