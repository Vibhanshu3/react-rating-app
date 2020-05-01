import React, { Component } from 'react';
import { saveMovie } from '../Services/fakeMovieService';

class NewMovie extends Component {
    state = {
        data: {
            title: "",
            genre: "",
            noInStock: "",
            rate: ""
        }

    }

    handleTitle = (e) => {
        this.setState({
            data: {
                title: e.currentTarget.value
            }
        })
    }

    handleGenre = (e) => {
        this.setState({
            data: {
                genre: e.currentTarget.value
            }
        })
    }

    handleStock = (e) => {
        this.setState({
            data: {
                noInStock: e.currentTarget.value
            }
        })
    }

    handleRate = (e) => {
        this.setState({
            data: {
                rate: e.currentTarget.value
            }
        })
    }

    handleDataSave = (e) => {
        e.preventDefault();

        const newData = this.state.data;

        if (newData.title === "" || newData.rate === "" || newData.genre === ""
            || newData.noInStock === "") {
            return;
        }

        //add movie
        saveMovie(newData)
    }

    render() {

        return (<React.Fragment>

            <form onSubmit={this.handleDataSave}>
                <label for="">Title</label><br />
                <input type="text" id="" placeholder="Enter Title"
                    onChange={this.handleTitle}></input>

                <select onChange={this.handleGenre}>
                    <option value="Action">5b21ca3eeb7f6fbccd471818</option>
                    <option value="Comedy">5b21ca3eeb7f6fbccd471814</option>
                    <option value="Thriller">5b21ca3eeb7f6fbccd471820</option>
                </select>

                <label for="">Number in Stock</label><br />
                <input type="number" onChange={this.handleStock}></input>

                <label for="">Rate</label><br />
                <input type="text" id="" placeholder="Enter Title"
                    onChange={this.handleRate}></input>

                <button type="submit" >Save</button>

            </form>
        </React.Fragment>
        )
    }
}

export default Login;