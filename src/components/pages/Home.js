
import Banner from "../layoutHome/Banner"
import CTA from "../layoutHome/CTA"
import Depoimentos from "../layoutHome/Depoimentos"
import Slider from "../layoutHome/Slider"

const Home = () => {
    return(
        <div>
            <Banner />

            <Slider />

            <Depoimentos />

            <CTA />
        </div>
    )
}

export default Home

// corrigidos os bugs e atualizado o código