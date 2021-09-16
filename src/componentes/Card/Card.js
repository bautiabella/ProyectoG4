import React, {Component} from "react";
import '../Card/style.css'

export default class Card extends Component{
    constructor (props){
        super (props);
        
        }


borrar() {
    console.log('Borrar');
}

verMas() {
    console.log('Ves más');
}

render (){
    return(

<div className = "card1">
       
            
        <img src= { `https://image.tmdb.org/t/p/w500${this.props.imagen} `}/>

            <h2>{this.props.title}</h2>
            <h5>{this.props.dialanzamiento}</h5>
            <button onClick={this.verMas}>Ver mas</button>
            <button onClick={this.borrar}>Borrar</button>
            
</div>
        
    )

}
}