import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Newsletter from './components/NewsLetter'

function App() {

  return (
    <body className=' mx-6 lg:mx-36'>
    <Navbar/>
    <Card/>
    <Newsletter/>
    <Footer/>
    </body>
  )
}

export default App
