import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getPerformancesQuery} from '../queries/queries';

class Performances extends Component {

    displayPerformances () {
        let performances = this.props.data.performances;
        console.log('performances: ', performances);
        if (!performances) {
            console.log("loading performances...");
            return (<tr><th>Retrieving Data...</th></tr>);
        } else {
           return performances.map (p => {
               return <tr key={p.id}><td>{p.name}</td><td>{p.genreId}</td></tr>;
           })
        }
    } 

    render() {
        console.log(this.props);
        return (
            <div className="div2">   
                <h3>Performances </h3>
                <table border='0' className='table1'>
                    <thead>
                        <tr>
                            <th align='left' width="200px" >Title</th>
                            <th align='left' width="200px">Genre</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {this.displayPerformances ()} 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default graphql (getPerformancesQuery) (Performances);


