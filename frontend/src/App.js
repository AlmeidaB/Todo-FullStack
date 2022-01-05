import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTodoComponent from './components/ListTodoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTodoComponent from './components/CreateTodoComponent';
import UpdateTodoComponent from './components/UpdateTodoComponent';
import ViewTodoComponent from './components/ViewTodoComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListTodoComponent}></Route>
                          <Route path = "/todos" component = {ListTodoComponent}></Route>
                          <Route path = "/add-todo" component = {CreateTodoComponent}></Route>
                          <Route path = "/view-todo/:id" component = {ViewTodoComponent}></Route>
                          <Route path = "/update-todo/:id" component = {UpdateTodoComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
