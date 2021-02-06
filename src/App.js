import React from "react";
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import NavBar from './navBar-Example/Navbar'

import Home from './components/Home'
import NavBar from './navBar/Navbar'
import Loading from './components/Loading'
// import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <Loading />
      <NavBar />
      <Home />

      {/* <SignUp /> */}
    </>
  );
}

export default App;
