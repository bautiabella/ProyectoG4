import './App.css';
import Container from './componentes/Container/Container';
import React from "react";
import Header from './componentes/Header/header';


function App() {
  return (
    <div className="App">
     <Container/>
    </div>
  )}

function App() {
  return (
    //METO LAS ETIQUETAS HERMANAS EN UNA MISMA ETIQUETA PADRE (REACT FRAGMENT aunque puede ser DIV tambien)
    
    <React.Fragment> 
      <Header/> 
       {/* EMPEZAMOS A CREAR COMPONENTES NOSOTROS */}
      <h1> y somos el grupo 4 </h1>
    </React.Fragment>
    
  );
}

export default App;