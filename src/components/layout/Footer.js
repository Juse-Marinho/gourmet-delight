import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

import styles from './Footer.module.css'
import logo from '../../img/PJ.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <span>GourmetDelight</span> &copy; 2024
            </p>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
            </ul>
            <p>
                <span>Feito por</span> <img src={logo} alt=""/>
            </p>
        </footer>
    )
}

export default Footer