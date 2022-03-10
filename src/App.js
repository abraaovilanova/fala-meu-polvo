import React from 'react'
import { connect } from 'react-redux'
import { Routes, Route } from "react-router-dom";


// Paginas
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'


function App(props) {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      language: state,
  }
}


export default connect(mapStateToProps)(App)