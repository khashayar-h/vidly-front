import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
    state = { 
        movies : getMovies()
     } 

     handleDelete = (e) => {
        const movies = this.state.movies.filter(m => m._id !== e._id);
        this.setState({movies})
     }

    render() { 
        const {length : count} = this.state.movies;
    if(count === 0) return (<p>There are no Movies in Database</p>)
        return (
    <React.Fragment>
        <p>There are {count} Movies in Database</p>
        <table className="table table-sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =>  <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <button type="button" onClick={()=>this.handleDelete(movie)} className='btn btn-primary btn-sm'>Delete</button>
                </tr>)}
            </tbody>
        </table>
        </React.Fragment> );
    }
}
 
export default Movies;