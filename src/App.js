// css
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';

// components
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact={true} path="/">
            <ItemListContainer />
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
