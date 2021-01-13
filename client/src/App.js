
import './App.css';
import React from 'react';
import Home from './home';
import Nav from './navbar';
//import Doc from './doc';
import Productlist from './productlist';
import Product from './products';
import useSaveInputs from './hooks/useSaveInputs';
import 'bootstrap/dist/css/bootstrap.min.css';
import productlist from './productlist';
function App() {
  const { state, signUp } = useSaveInputs();

  console.log(state);

  return (
    <div className="App">
      <Nav></Nav>

      <Productlist></Productlist>
      <Product></Product>
    </div>
  );
}
//<Home onSave={signUp}></Home>
export default App;
