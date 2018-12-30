import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';  

import Performances from './components/Performances';
// import AddPerformance from './components/AddPerformance';

const client = new ApolloClient ({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>

        <div className="main">
          <header className='header'><h1>L i f e  &nbsp; T h e a t r e</h1></header>
          
          <img src="bateman.jpg" className='responsive img1' alt='Hamlet'  />
          
         
          <Performances />

           {/*
          <AddPerformance />
          */}

          <div className="footer">
             <p>&copy; Luba@geeks.net</p>
          </div>

        </div>

      </ApolloProvider>

    );
  }
}

export default App;


