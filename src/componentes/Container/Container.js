
import React, {Component} from 'react';
import Card from "../Card/Card"
import FilterField from "../FilterField/FilterField"
import "../Container/style.css"

export default class Container extends Component{
    constructor (props){
        super (props);
        this.state = {
            movies:[],
            page: 2,
            moviesIniciales: [] ,
            orientation:"row"
        }
    }
    componentDidMount (){
    fetch (`http://api.themoviedb.org/3/movie/popular?api_key=430be1133e3aa13291c6a21815206c6a`)
    .then (response => {return response.json () })
    .then (data =>{

     //console.log(data.results);
    this.setState({
        movies: data.results, 
        moviesIniciales: data.results
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

filtrarPorTitulo (input){ 
    let peliculasFiltradas= this.state.moviesIniciales.filter(pelicula => pelicula.title.toLowerCase().includes(input.toLowerCase()))
    this.setState({
        movies: peliculasFiltradas
    })
} 
changeOrientation(){
if (this.state.orientation === "row"){
    this.setState({
    orientation:"column"
})

}else {
    this.setState({
        orientation:"row"
    })
}
}
    render (){
console.log(this.state.movies);
    return (
        <div className={`container-${this.state.orientation}`}>
            <FilterField filtrarPorTitulo={(input)=> { this.filtrarPorTitulo(input)}} /> 
            <button className= "boton2" onClick= {() => this.agregarCards()}>Agregar más películas</button>
            <button  className= "boton3" onClick ={() => this.changeOrientation()}>Cambiar orientacion</button>
         
        {this.state.movies === [] ? 

            <h4>Cargando...</h4> :
        
            this.state.movies.map( (element, index) => {
                return <Card 
                        key = {index}
                        imagen = {element.backdrop_path}
                        orientation = {this.state.orientation}
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
