import {gql} from 'apollo-boost';

const getPerformancesQuery = gql`
  {
    performances {
      name
      id
      name
      genreId
    }
  }
`

// const getPerformancesQuery = gql`
//   {
//     performances {
//       name
//       id
//       genre {
//         id
//         name
//       }
//     }
//   }
// `

const getGenresQuery = gql`
  {
    genres {
      name
      id
    }
  }
`

const addPerformanceMutation = gql`
  mutation ($name:String! $genreId:ID!)
    {
       addPerformance (name: $name,   genreId: $genreId) {
            name
            genreId
       }
    }
`

export {getGenresQuery, getPerformancesQuery, addPerformanceMutation};