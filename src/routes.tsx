import React from "react";
import { Route, Switch } from "react-router-native";
import { Home } from "./containers/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
};
