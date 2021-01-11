
import './App.css';
import Home from './home';
import Nav from './navbar';
import Doc from './doc';
import Productlist from './productlist';
import Product from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      
      <Productlist></Productlist>
      <Product></Product>
    </div>
  );
}

export default App;
