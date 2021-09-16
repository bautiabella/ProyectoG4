
import React, {Component} from 'react';
import Card from "../Card/Card"
import "../Container/style.css"

export default class Container extends Component{
    constructor (props){
        super (props);
        this.state = {
            movies:[]
        }
    }
    componentDidMount (){
    fetch ('http://api.themoviedb.org/3/movie/popular?api_key=430be1133e3aa13291c6a21815206c6a')
    .then (response => {return response.json () })
    .then (data =>{

     //console.log(data.results);
    this.setState({
        movies: data.results
    })
    
})
  
}   

   
    

    render (){
console.log(this.state.movies);
    return (
        <div className="container">
         
           
		{this.state.movies.map( (element, index) => {
           return <Card 
                    key = {index}
                    imagen = {element.backdrop_path}
                    title = {element.title}
                    dialanzamiento = {element.release_date}
                    info = {element.overview}
                ></Card>

          
        })}
    </div>
    )
}
}
