import React from 'react';
import '../src/styles/Base.css';
import '../src/styles/NavBarStyle.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ShoppingListPage from "./pages/ShoppingListPage";


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
