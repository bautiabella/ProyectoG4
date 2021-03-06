import React, {Component} from "react";
import '../Card/style.css'

export default class Card extends Component{
    constructor (props){
        super (props);
        this.state={
            clase: 'hide',
            mnsj: "Ver más"
        }
    }


verMas() {
    if(this.state.clase === 'hide'){
        this.setState({
            clase: 'show',
            mnsj: "Ver menos"
        })
    }else {
        this.setState({
            clase: 'hide',
            mnsj: "Ver más"
        })
    }
    
}

render (){
    return(

<div className = {`card1-${this.props.orientation}`}>
       
            
        <img src= { `https://image.tmdb.org/t/p/w500${this.props.imagen} `} alt=""/>

            <h2>{this.props.title}</h2>
            <h5>Fecha de lanzamiento: {this.props.dialanzamiento}</h5>
            <p className={this.state.clase}>{this.props.info}<br></br><br></br>Rating: {this.props.rating}</p>
            <button className= "boton1" onClick={() => this.verMas()}>{this.state.mnsj}</button>
            <button className= "boton1" onClick={() => this.props.borrarMovie(this.props.id)}>Borrar</button>
            
</div>
        
    )

}
}