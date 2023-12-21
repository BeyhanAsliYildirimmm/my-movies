import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import axios from "axios";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {

  state = {

    movies: [],
    searchQuery: ""
  }


 
  async componentDidMount() {

    //await --> bekle demek  get işlemi bitne kadar bekle 
    const response = await axios.get("http://localhost:3002/movies")
    console.log(response);
    this.setState({ movies: response.data });

  }


  

  //DELETE MOVIE ---  AXİOS API

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );

    this.setState(state => ({
      movies: newMovieList
    }))

  }

  //SEARCH MOVIE

  searchMovie = (event) => {
    // console.log(event.target.value)

    this.setState({ searchQuery: event.target.value });
  }


  //ADD MOVIE 

  AddMovie = async (movie) => {

    //await --> bu işlem gerçekleşmeden alt satıra geçmesini kısıtlar.

    await axios.post(`http://localhost:3002/movies/`, movie)
    this.setState(state => ({
      movies: state.movies.concat([movie])

    }))

  }

  render() {

    // search kısmında aranan text'e göre filtreliyor.
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
      //sort()--> film eklediğimzde yeni eklenen başta olmayı ilk eklenen sonda olmalı.

    ).sort((a, b) => {

      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;

    });

    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <div className="row">
                <div className="col-lg-12">
                  <SearchBar searchMovieProp={this.searchMovie} />
                </div>
              </div>
              <MovieList
                movies={filteredMovies}
                deleteMovieProp={this.deleteMovie} />
            </React.Fragment>
          } />

          <Route path="/add" element={
            <AddMovie onAddMovieProp={(movie) => {
              this.AddMovie(movie)

            }} />
          } />
          
          <Route path={`/edit/:id`} element={<EditMovie />} />

        </Routes>
      </Router>

    );
  }

}
export default App;