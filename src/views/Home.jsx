import ScrollProgress from '../components/common/ScrollProgress'
import Header from '../components/homePage/Header'
import Welcome from '../components/homePage/Welcome'
import Card from '../components/homePage/Card'

const Home = () => {
    return(
        <>
            <ScrollProgress />
            <Header />
            <Welcome />
            <Card />
        </>
    )
}

export default Home
