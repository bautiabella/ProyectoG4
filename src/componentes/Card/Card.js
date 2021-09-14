import React, {Component} from "react";
import '../Card/style.css'

export default class Card extends Component{
    constructor (props){
        super (props);
        
        }

render (){
    return(

<div className = "card1">
            <button> - </button>
            <button> + </button>
            
        <img src="{this.props.imagen}" />
        
            <h2>{this.props.title}</h2>
            <h5>{this.props.descripcion}</h5>
            
</div>
        
    )

}
}