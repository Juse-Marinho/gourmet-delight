import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo_GD.png'

function Navbar() {
    return(
        <header>
            <Link to="/">
                <img src={logo} alt="Gourmet Delight"/>
            </Link>
            <nav className={styles.navbar}>
                <Container>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/sobre">Sobre Nós</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/cardapio">Cardápio</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar