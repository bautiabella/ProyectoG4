import React, {Component} from "react";
import '../Card/style.css'

export default class Card extends Component{
    constructor (props){
        super (props);
        
        }

render (){
    return(

<div className = "card1">
       
            
        <img src= { `https://image.tmdb.org/t/p/w500${this.props.imagen} `}/>

            <button>←</button>
            <button>→</button>
            <h2>{this.props.title}</h2>
            <h5>{this.props.dialanzamiento}</h5>
            <button>Ver mas</button>
            <button>Borrar</button>
            
</div>
        
    )

}
}