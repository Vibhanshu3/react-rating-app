//imprc
import React, { Component } from 'react';
import { getMovies } from "../Services/fakeMovieService"
import { getGenres } from "../Services/fakeGenreService"
import Like from "./like";
import Pagination from "./pagination";
import Genre from "./genre"
import axios from "axios";


class MovieTable extends Component {

    state = {
        movies: getMovies(),
        limit: 4,
        currentPage: 1,
        genres: [{ "_id": "1", "name": "All Genre" }, ...getGenres()],
        currentGenre: "All Genre",
        searchQuery: ""
    }

    handleDelete = (movie) => {
        const clonemovies = [...this.state.movies];
        const filteredMovies = clonemovies.filter((m) => {
            return m !== movie;

        })
        this.setState({ movies: filteredMovies });
    }

    handleColorChange = (movie) => {
        const clonedArray = [...this.state.movies];
        const index = clonedArray.indexOf(movie);
        clonedArray[index].liked = !clonedArray[index].liked;
        this.setState({ movies: clonedArray });

    }

    componentDidMount() {
        axios.get("genre").then(response => {
            // console.log(response.data)
            this.setState({ genres: [...this.state.genres, ...response.data.data] }) //... gives the object of genres
        })
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    pageChange = (newPage) => {
        //handling active class of pagination.
        // var li = document.getElementById(newPage + "a");
        // var allLi = document.querySelectorAll(".page-item")
        // var noOfPages = Math.ceil(this.state.movies.length / this.state.limit)

        // for (var i = 1; i <= noOfPages; i++) {
        //     if (i != newPage) {
        //         allLi[i - 1].classList.remove("active")
        //     }
        // }

        // li.classList.add("active");
        this.setState({ currentPage: newPage });
    }

    handleGenre = (genre) => {
        //handling genre active state.
        // var li = document.getElementById(genre._id);
        // var allLi = document.querySelectorAll(".list-group-item");

        // for (var i = 0; i < this.state.genres.length; i++)
        //     (allLi[i].classList.remove("active"));

        // li.classList.add("active");

        this.setState({
            currentGenre: genre.name,
            currentPage: 1
        })
    }

    handleSearchChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            searchQuery: e.currentTarget.value
        })
    }


    render() {

        let { movies, limit, currentPage, genres, currentGenre, searchQuery } = this.state;

        if (searchQuery) {
            movies = movies.filter((movie) => {
                return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            })

        } else {
            movies = currentGenre === "All Genre" ? movies : movies.filter((movie) => {
                return movie["genre"]["name"] === currentGenre;
            })
        }

        let cPageMovies = pagination(movies, limit, currentPage);
        function pagination(movies, limit, currentPage) {
            let sidx = (currentPage - 1) * limit;
            let eidx = limit * currentPage;
            return movies.slice(sidx, eidx);
        }

        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-3 mt-4">
                        {
                            < Genre
                                onClick={this.handleGenre}
                                genres={genres}
                                currentGenre={currentGenre}
                            ></Genre>
                        }
                    </div>
                    <div className="col mt-4">
                        <input type="text" placeholder="Movies" id="Name"
                            onChange={this.handleSearchChange}
                            value={this.state.input} />

                        <table className="table">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Like</th>

                            </tr>

                            <tbody>
                                {cPageMovies.map((movie) => {
                                    return (
                                    <tr scope="row" key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>
                                            <Like
                                                liked={movie.liked}
                                                onClick={() => { this.handleColorChange(movie) }}>
                                            </Like>
                                        </td>
                                        <td> 
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => {
                                                this.handleDelete(movie)
                                                }}>Delete
                                            </button>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                        <Pagination
                            currentPage={currentPage}
                            limit={limit}
                            size={movies.length}
                            getPageNumber={this.pageChange}>
                        </Pagination>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default MovieTable;