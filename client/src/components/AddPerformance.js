import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {addPerformanceMutation, getPerformancesQuery    } from '../queries/queries';
import {getGenresQuery} from '../queries/queries';
import { getDirectiveInfoFromField } from 'apollo-utilities';

class AddPerformance extends Component {

    constructor(props) {
        super();
        this.state = {
            name: "",
            genreId: ""
        };
    }

    submitForm(e) {
        // do not refresh page
        e.preventDefault();
        //console.log('state', this.state);
        this.props.addPerformanceMutation({
            variables: {
                name: this.state.name,
                genreId: this.state.genreId
            },
            refetchQueries: [{
                query: getPerformancesQuery
            }]
        });     
    }

    displayGenres() {
        
        let gq = this.props.getGenresQuery;
        let genres = gq.genres;
        //console.log('genres', genres);
        if (!genres) {
            console.log("loading genres");
            return (
                <option disabled>Retrieving genres...</option>
            )
        } else {
            return genres.map(g => {
                return <option key={g.id} value={g.id}> {g.name} </option>
            })
        }
    }

    render() {

        return (
            <div className='div3'>
                <h3 align='right'>Add a Performance</h3>
                <form onSubmit={this.submitForm.bind(this)}>
                    <table cellSpacing="10px">
                        <tbody>
                        <tr>
                            <th align='left' width='100px'>
                                Performance:
                            </th>
                            <td width="300px">
                            
                                <input type='text' onChange={(e) => {
                                    this.setState({ name: e.target.value })
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <th align='left' width="100px">
                                Genre:
                            </th>

                            <td  width="300px">
                                <select onChange={(e) => {
                                    this.setState({ genreId: e.target.value })
                                }} >
                                    <option>Select Genre</option>
                                    {this.displayGenres()}
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td>
                                <button className='button1'>
                                    +                              
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

//export default graphql(getGenresQuery)(AddPerformance);

//
// Bind 1 query and 1 mutation to AddPerformance component
//
export default compose (
    graphql(getGenresQuery, {name: 'getGenresQuery'}),
    graphql(addPerformanceMutation, {name: 'addPerformanceMutation'})
)(AddPerformance)