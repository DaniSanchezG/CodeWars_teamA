
// import React from 'react';
// import Navbar from '../src/components/Nav/Navbar';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       App
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Switch, Route, Redirect THIS 3 WAS REMOVED FROM IMPORT BROWSERROUTER HERE ON APPJS AFTER Router
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';


import useLocalstorage from "./hooks/useLocalstorage";


function App () {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [logged, setLogged] = useLocalstorage('login', {
    display: '',
    login: false
  })

  return (
    <div className="App">
      {/* {loginModal && <Modal closeModal={setLoginModal} openModal={setRegisterModal} title={'sign in'} setLogged={setLogged} logged={logged} />}
      {registerModal && <Modal closeModal={setRegisterModal} openModal={setLoginModal} title={'create your account'} />} */}
      <Header openLoginModal={setLoginModal} openRegisterModal={setRegisterModal} logged={logged} setLogged={setLogged} />
      <Router>
        <Nav logged={logged} />
       
      </ Router>
    </div>
  );
}

export default App;


