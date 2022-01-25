import React from "react";
import "./Styles/Base.css";
import "./Styles/NavBarStyle.css";
import "./Styles/ResponsiveStyle.css";
import "./Styles/ButtonStyle.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShoppingListPage from "./Pages/ShoppingListPage";

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
