import './App.css';
import Boton from './componentes/boton.jsx';
import Contador from './componentes/contador.jsx';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import React from "react";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClicks: 0
    };
    this.clickContador = this.clickContador.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  clickContador(){
    this.setState(({numClicks}) => ({numClicks: numClicks + 1}));
  }
  reiniciarContador(){
    this.setState({numClicks: 0});
  }
  render(){
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
        </div>
        <div className="contenedor-principal">
          <Contador numClicks={this.state.numClicks} />
          <Boton 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={this.clickContador} />
          <Boton 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}


export default App;
