import React, { Component } from 'react';
import "../FilterField/style.css"

class FilterField extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" 
    }
    }

    prevenirDefault(evento){evento.preventDefault()}
    capturarInput(evento){
        this.setState({
            input:evento.target.value
        },()=>this.props.filtrarPorTitulo(this.state.input))

    }
    render() { 
        return (  <form onSubmit={(evento) => this.prevenirDefault(evento)}>
        <input size="150"
          className="input"
          type="text"
          onChange={(evento) => {
            this.capturarInput(evento);
          }}
          name="search"
          id=""
          placeholder="Buscar película..."
        />
      </form>);
    }
}
 
export default FilterField;