// css
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import { initialState } from './assets/state';

// components
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  // console.log(initialState)
  const [items, setItems] = useState(initialState.items)
  const [cartItems, setCartItems] = useState(initialState.cartItems)

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact={true} path="/">
            <ItemListContainer items={items} />
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart items={items} cartItems={cartItems} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
