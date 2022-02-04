import React from 'react';
import UserList from "./components/UserList/UserList";
import TodoList from "./components/TodoList/TodoList";
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from "react-router";

function App() {
  return <div>
            <Header/>
           <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/todo" component={TodoList} />
           <Redirect to="/" />
        </Switch>
            {/* <hr/>
            <UserList/>
            <hr/>
            <TodoList/> */}

  </div>;
}

export default App;
