
import './App.css';
import React from 'react';
import Home from './home';
import Nav from './navbar';
//import Doc from './doc';
//import Productlist from './productlist';
//import Product from './products';
import useSaveInputs from './hooks/useSaveInputs';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const { state, signUp } = useSaveInputs();

  console.log(state);

  return (
    <div className="App">
      <Nav></Nav>

      <Home onSave={signUp}></Home>
    </div>
  );
}

export default App;
