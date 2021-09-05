import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import Carousel from './Components/Carousel/Carousel'
import Cards from './Components/Cards/Cards';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        {/* <Carousel/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductDetails}/>
          <Route path="/cart" component={Cart}/>
          <Route component={() => <h1>Error</h1>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
