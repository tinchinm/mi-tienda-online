import React from "react";
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
          <h1>
            Creando mi nueva tienda de E-Comerce
          </h1>
          <p>
            Martin Marzialetti
          </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
