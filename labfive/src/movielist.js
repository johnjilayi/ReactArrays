import React from "react";


class MovieList extends React.Component {


    constructor(movies) {
    super(movies)

    const table = ["iron Man", "iron Man 2", "iron Man 3"];

    this.state = {

        movieList: table
    }

    }


    movieList() {

      return ( 
<div>
    <p>{this.state.movieList[0]}</p>
    <p>{this.state.movieList[1]}</p>
    <p>{this.state.movieList[2]}</p>
</div>

        )
    }

    render() {
        return (this.movieList())
    }

}

export default MovieList