// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;