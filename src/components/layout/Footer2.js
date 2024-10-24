import styles from './Footer2.module.css'

import logo from '../../img/logo_GD.png'

function Footer2(){
    return(
        <section className={styles.rodape}>
            <img src = {logo} alt='GourmetDelight'/>
          <ul>
            <li>'(81) 90000-0000'</li>
            <li>'gourmetdelight@confeitaria.com'</li>
            <li>'Rua dos bobos, n° 0'</li>
          </ul>
        </section>
    )
}

export default Footer2