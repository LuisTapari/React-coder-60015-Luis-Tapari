import './App.css'
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import Saludo from './Components/saludo/Saludo'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './Components/Error/Error';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
