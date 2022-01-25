import React from "react";
import ShoppingItems from "../components/ShoppingItems";
import NavBar from "../components/NavBar";
const ShoppingListPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ShoppingItems />
      </div>
    </div>
  );
};

export default ShoppingListPage;
