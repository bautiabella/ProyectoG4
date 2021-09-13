import React, {Component} from 'react';

export default class Container extends Component{
    constructor (props){
        super (props);
        this.state = {
        }
    }
    componentDidMount (){
    fetch ('http://api.themoviedb.org/3/movie/popular?api_key=430be1133e3aa13291c6a21815206c6a')
    .then (response => {return response.json () })
    .then (data => console.log(data))
}   
    render (){
    return (
        <div>
        </div>
    )
}
}