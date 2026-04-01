import './Depoimentos.css'
import foto5 from '../../img/IMG5.png'

const Depoimentos = () => {
    return(
        <div>
            <div className='headerDepoimentos'>
                <img src={foto5} alt=''/>
                <h2>Depoimentos</h2>
            </div>

            <container className='depoimentos'>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus lacus id ligula dapibus molestie. Sed vel lacinia elit. Nam maximus pulvinar mollis. Aliquam commodo leo risus, ac tincidunt lacus laoreet vel.</p>
                    <h3>Fulano</h3>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus lacus id ligula dapibus molestie. Sed vel lacinia elit. Nam maximus pulvinar mollis. Aliquam commodo leo risus, ac tincidunt lacus laoreet vel.</p>
                    <h3>Cicrano</h3>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus lacus id ligula dapibus molestie. Sed vel lacinia elit. Nam maximus pulvinar mollis. Aliquam commodo leo risus, ac tincidunt lacus laoreet vel.</p>
                    <h3>Beltrano</h3>
                </div>
            </container>

            <div className='paragrafoDep'>
                <p>Explore nosso menu de confeitaria gourmet e</p>
                <p>experimente a fusão perfeita entre <span>sabor</span> e <span>elegância.</span></p>
                <p>Faça sua encomenda agora para uma <span>doce</span> experiência</p>
                <p>que você e seus convidados nunca esquecerão.</p>
            </div>
        </div>
    )
}

export default Depoimentos