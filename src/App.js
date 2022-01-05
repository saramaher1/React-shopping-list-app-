import React from 'react';
import '../src/Styles/Base.css';
import '../src/Styles/NavBarStyle.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "../src/Pages/HomePage";
import ShoppingListPage from "../src/Pages/ShoppingListPage";


function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Shoppinglist" component={ShoppingListPage} />
        
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
