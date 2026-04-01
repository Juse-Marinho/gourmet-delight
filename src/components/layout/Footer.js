import './Footer.css'
import logo from '../../img/logo.png'
import logoPJ from '../../img/PJ.png'

import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
    return(
        <div>
            <section className='rodape'>
                <img src={logo} alt=''/>
                <ul className='list-rodape'>
                    <li>(81) 90000-0000</li>
                    <li>gourmetdelight@confeitaria.com</li>
                    <li>Rua dos bobos, n° 0</li>
                </ul>
            </section>

            <footer className='footer'>
                <p>
                    <span>Gourmet Delight</span> &copy; 2024
                </p>
                <ul className='social-list'>
                    <li> <FaFacebook /> </li>
                    <li> <FaInstagram /> </li>
                    <li> <FaLinkedin /> </li>
                    <li> <FaWhatsapp /> </li>
                </ul>
                <p>
                    <span>Feito por</span> <img src={logoPJ} alt=''/>
                </p>
            </footer>
        </div>
    )
}

export default Footer