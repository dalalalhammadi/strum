import React from "react";
import UkuleleList from "./UkuleleList";
import UkuleleDetail from "./UkuleleDetail";
import MusicDetail from "./MusicDetail";
import Home from "./Home";
import ukuleleStore from "../stores/ukuleleStore.js";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/music/:musicSlug">
        <MusicDetail />
      </Route>
      <Route path="/ukulele/:ukuleleSlug">
        <UkuleleDetail />
      </Route>
      <Route path="/ukulele">
        <UkuleleList ukuleles={ukuleleStore.ukuleles} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
