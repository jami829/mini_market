// css
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';

// components
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <ItemListContainer id="ItemListContainer" />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
