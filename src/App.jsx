import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GroceryListView from "./Screens/GroceryListView";

const App = () => {
  return (
    <>
      <header>header works</header>
      <Switch>
        <Route exact path="/" component={GroceryListView} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
