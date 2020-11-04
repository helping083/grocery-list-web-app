import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GroceryListView from "./Screens/GroceryListView";
import GroceryEntryView from "./Screens/GroceryEntryView";
import "materialize-css";

const App = () => {
  return (
    <>
      <header>header works</header>
      <Switch>
        <Route path="/details/:id" component={GroceryEntryView} />
        <Route exact path="/" component={GroceryListView} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
