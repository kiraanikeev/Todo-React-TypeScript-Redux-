import React from "react";
import UserList from "./components/UserList/UserList";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/users" component={UserList} />
        <Route exact path="/" component={TodoList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
