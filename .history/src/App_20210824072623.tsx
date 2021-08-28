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

  return (
    <Wrapper>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route path="/view-results" component={ViewResults} />
            <Route path="/login" component={Login} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </Router>
      </Container>
    </Wrapper>
  );
};

export default App;