
import React, {Component} from 'react';
import Card from "../Card/Card"
import "../Container/style.css"

export default class Container extends Component{
    constructor (props){
        super (props);
        this.state = {
            movies:[],
            page: 2,
        }
    }
    componentDidMount (){
    fetch (`http://api.themoviedb.org/3/movie/popular?api_key=430be1133e3aa13291c6a21815206c6a`)
    .then (response => {return response.json () })
    .then (data =>{

     //console.log(data.results);
    this.setState({
        movies: data.results
    })
    
})
  
}   
agregarCards(){
    fetch(`http://api.themoviedb.org/3/movie/popular?api_key=430be1133e3aa13291c6a21815206c6a&page=${this.state.page}`)
    .then(response => {return response.json()})
    .then(data => {
        let arrayPrevio = this.state.movies;
        let arrayActualizado = arrayPrevio.concat(data.results);
        let pageActualizado = this.state.page + 1;
        this.setState({
            movies: arrayActualizado,
            page: pageActualizado,
        })
    })
}


borrarMovie(id){
    let peliculasFiltradas = this.state.movies.filter(movies => movies.id !== id);
    this.setState({
        movies: peliculasFiltradas
    });
}

    render (){
console.log(this.state.movies);
    return (
        <div className="container">

            <button className= "boton2" onClick= {() => this.agregarCards()}>Agregar más películas</button>
         
        {this.state.movies === [] ? 

            <h4>Cargando...</h4> :
        
            this.state.movies.map( (element, index) => {
                return <Card 
                        key = {index}
                        imagen = {element.backdrop_path}
                        title = {element.title}
                        dialanzamiento = {element.release_date}
                        info = {element.overview}
                        rating = {element.vote_average}
                        id = {element.id}
                        borrarMovie = {(id) => this.borrarMovie(id)}

                    ></Card>
                })
            }

		
    </div>
    )
}
}
