import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Calculations from './calculations';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Route path="/calculator" component={Calculations}></Route>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
