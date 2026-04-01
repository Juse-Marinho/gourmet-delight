import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Cardapio from './components/pages/Cardapio'
import Contato from './components/pages/Contato'

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>

          <Route exact path='/' element={<Home />}/>
          <Route exact path='/sobre' element={<Sobre />}/>
          <Route exact path='/cardapio' element={<Cardapio />}/>
          <Route exact path='/contato' element={<Contato />}/>

        </Routes>
      </Container>

      <Footer />
      </Router>
    </div>
    
  );
}

export default App;
