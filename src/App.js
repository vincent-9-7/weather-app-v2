import React from "react";
// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
// import NavBar from './NavBar-Example/Navbar'

import Home from './Components/Home'
import NavBar from './NavBar/Navbar'
import Loading from './Components/Loading'
// import SignUp from './Components/SignUp'

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
