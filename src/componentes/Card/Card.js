import React, {Component} from "react";
import '../Card/style.css'

export default class Card extends Component{
    constructor (props){
        super (props);
        this.state={
            clase: 'hide'
        }
        }


borrar() {
    console.log('Borrar');
}

verMas() {
    if(this.state.clase === 'hide'){
        this.setState({
            clase: 'show'
        })
    }else {
        this.setState({
            clase: 'hide'
        })
    }
    
}

render (){
    return(

<div className = "card1">
       
            
        <img src= { `https://image.tmdb.org/t/p/w500${this.props.imagen} `}/>

            <h2>{this.props.title}</h2>
            <h5>Fecha de lanzamiento: {this.props.dialanzamiento}</h5>
            <p className={this.state.clase}>{this.props.info}</p>
            <button className= "boton" onClick={() => this.verMas()}>Ver mas</button>
            <button className= "boton" onClick={() => this.borrar()}>Borrar</button>
            
</div>
        
    )

}
}