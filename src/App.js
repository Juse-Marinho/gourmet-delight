import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Cardapio from './components/pages/Cardapio'
import Contato from './components/pages/Contato'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer2 from './components/layout/Footer2'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/sobre">
            <Sobre/>
          </Route>
          <Route exact path="/cardapio">
            <Cardapio/>
          </Route>
          <Route exact path="/contato">
            <Contato/>
          </Route>
        </Container>
      </Switch>
      <Footer2/>
      <Footer/>
    </Router>
  )
}

export default App;
