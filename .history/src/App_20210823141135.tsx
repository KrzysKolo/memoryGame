import { useState, useEffect } from 'react';
import * as React from "react";
//CSS
import './index.css';
//Components
import { Header, Home, Login, ViewResults, } from './components';
// Styles
import { Wrapper, Container } from './App.styles';
//Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App: React.FC = () => {

  const { user, loading, logout } = {
    user: null,
    loading: false,
    logout: () => {},
  };

  if (loading) return null;
  if (!user) return <button className="link">Login</button>;

  return (
    <Wrapper>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route path="/view-results" component={ViewResults} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Container>
    </Wrapper>
  );
};

export default App;