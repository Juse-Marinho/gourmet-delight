import './Slider.css'

import bolo from '../../img/bolo.jpg'
import doces from '../../img/doces.jpg'
import gelado from '../../img/gelado.jpg'
import foto1 from '../../img/IMG2.png'

const Slider = () => {
    return(
        <div className='comidas'>
            <h2>Explore nossas Delícias!</h2>

            <div className="imagens">
                <img src={bolo} alt=''/>
                <img src={doces} alt=''/>
                <img src={gelado} alt=''/>
                <img src={foto1} alt=''/>
            </div>

        </div>
    )
}

export default Slider