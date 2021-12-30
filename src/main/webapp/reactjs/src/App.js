import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import store from './services/store';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Account from './components/Account';
import AccountList from './components/AccountList';
import RecordTransaction from './components/RecordTransaction';
import TransactionList from './components/TransactionList';

export default function App() {
  const marginTop = {
    marginTop: "20px"
  }

  const heading = "Welcome to ePon!";
  const desc = "“It's not now much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.”";
  const footer = "Robert Kiyosaki";

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={() => <Welcome heading={heading} desc={desc} footer={footer}/> } />
              <Route path="/add-account" exact component={Account} />
              <Route path="/edit-account/:id" exact component={Account} />
              <Route path="/account-list" exact component={AccountList} />
              <Route path="/record-transaction" exact component={RecordTransaction} />
              <Route path="/transaction-list" exact component={() => 
                <Provider store={store}><TransactionList/></Provider>} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}
