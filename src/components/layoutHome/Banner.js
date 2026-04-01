import fundo from '../../img/IMG1.png'
import './Banner.css'

const Banner = () => {
    return(
        <div className='banner'>
            <img src={fundo} alt='GourmetDelight'/>
            <div className='bannerTxt'>
                <h4>Descubra o sabor da Excelência!</h4>
                <h1>Gourmet Delight</h1>
            </div>
        </div>
    )
}

export default Banner