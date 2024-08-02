import './App.css'
import Saludo from './Components/saludo/Saludo'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Saludo Bienvenidos={"Bienvenidos a BullBeat"} />
    <Footer />
    </>
  )
}

export default App
