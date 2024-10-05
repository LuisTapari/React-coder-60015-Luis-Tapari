import './App.css'
import { useState, useEffect } from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './Components/Error/Error';
import { CartProvider } from './Context/CartContext/CartProvider';
import Cart from './Components/Cart/Cart';
import { db } from './main';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Checkout from './Components/Checkout/Checkout';
import Contact from './Components/Contact/Contact';

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect (() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "item");

    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
    });
  }, []);

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar />
    <div className='main'>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
    <Footer />
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
