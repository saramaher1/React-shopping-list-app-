import React from "react";
import ShoppingItems from "../Components/ShoppingItems";
import NavBar from "../Components/NavBar";

// Architecture -1
// If ShoppingItems does all, then ShoppingListPage should not exist.
// This is not correct refactoing, you are just moving the problem to another place instead of breaking stuff apart in maneableable chunks.
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
