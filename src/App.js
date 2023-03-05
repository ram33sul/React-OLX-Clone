import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './pages/home';
import {Routes, Route} from 'react-router-dom'
import SignupPage from './pages/signup_page';
import LoginPage from './pages/login_page';
import { AuthContext, firebaseContext } from './store/firebase_context';
import Sell from './pages/sell';
import ProductDetailsPage from './pages/product_details_page';
import ProductDetails from './store/product_context';
function App() {
  const {setUser} = useContext(AuthContext);
  const {Firebase} = useContext(firebaseContext);
  useEffect(()=>{
     Firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
     })
  })
  return (
    <div className="App">
      <ProductDetails>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/sell' element={<Sell />}></Route>
          <Route path='/productDetails' element={<ProductDetailsPage />}></Route>
        </Routes>
      </ProductDetails>
    </div>
  ); 
}

export default App;
