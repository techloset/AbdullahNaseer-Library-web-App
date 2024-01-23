import NewsLetter from '../components/NewsLetter'
import HeroGrid from '../components/HeroGrid'
import ServiceSection from '../components/ServiceSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className=' mx-6 lg:mx-36'>
            <Navbar />
            <main className=' mt-12'>
                <HeroGrid />
                <div className=' mt-12'>
                <ServiceSection />
                </div>
                <div className='mt-12'>
                <NewsLetter />
                </div>
            </main>
            <div className="mt-12 ">
            <Footer />
            </div>
        </div>
    )
}

export default Home