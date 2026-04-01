import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'
import './Navbar.css'
import Container from './Container'

const Navbar = () => {
    return(
        <header>
            <Link to="/">
                <img src={logo} alt=''/>
            </Link>

            <nav className='navbar'>
                <Container>
                <ul className='list'>
                    
                    <li className='item'>
                        <Link to="/sobre">Sobre</Link>
                    </li>

                    <li className='item'>
                        <Link to="/cardapio">Cardapio</Link>
                    </li>
                    
                    <li className='item'>
                        <Link to="/contato">Contato</Link>
                    </li>    
                    
                </ul>
                </Container>
            </nav>

        </header>
    )
}

export default Navbar