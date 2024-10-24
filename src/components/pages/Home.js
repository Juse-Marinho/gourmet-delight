import styles from './Home.module.css'

import foto1 from '../../img/IMG1.png'
import foto2 from '../../img/IMG2.png'
import foto3 from '../../img/IMG3.png'
import foto4 from '../../img/IMG4.png'
import foto5 from '../../img/IMG5.png'
import foto6 from '../../img/IMG6.png'

function Home() {
    return (
        <section>
            <div className={styles.img}>
                <img src = {foto1} alt='GourmetDelight'/>        
                <h4>Descubra o sabor da Excelência!</h4>
                <h1>GourmetDelight</h1>       
            </div>
            
            <section className={styles.comidas}>
                <h2>Explore Nossas Delícias</h2>
                    <div className={styles.cardapio}>
                    <div className={styles.comidas2}>
                        <img src={foto3} alt='Doces Finos'/>
                        <button>Doces Finos</button>
                    </div>
                    <div className={styles.comidas1}>
                        <img src={foto2} alt='Bolos e tortas'/>
                        <button>Bolos e tortas</button>
                    </div>
                    <div className={styles.comidas3}>
                        <img src={foto4} alt='Comidas geladas'/>
                        <button>Delícias geladas</button>
                    </div>
                </div>
            </section>

            <div className={styles.depoimentos}>
                <img src={foto5} alt=""/>
                <h2>Depoimentos</h2>
            </div>

            <container className={styles.criticas}>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, nulla non tincidunt vulputate, ipsum diam tempus urna, at condimentum lorem tellus id magna.</p>
                <h3>Fulano</h3>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, nulla non tincidunt vulputate, ipsum diam tempus urna, at condimentum lorem tellus id magna.</p>
                <h3>Cicrano</h3>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, nulla non tincidunt vulputate, ipsum diam tempus urna, at condimentum lorem tellus id magna.</p>
                <h3>Beltrano</h3>
                </div>
            </container>

            <div className={styles.pa}><p>Explore nosso menu de confeitaria gourmet e experimente a fusão perfeita de sabor e elegância.
            Faça sua encomenda agora para uma experiência de doce requinte que você e seus convidados nunca esquecerão!</p></div>

            <div className={styles.mapa}>
                <h2>Visite a nossa loja ou faça<br></br>sua encomenda online!</h2>
                <img src={foto6} alt=""/>
            </div>
        </section>
    )
}

export default Home