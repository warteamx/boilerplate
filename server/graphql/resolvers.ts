import Airbnb from '../models/airbnb'

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
      hello: () => "hello",
    },
    // my_query: async () => {
    //     let property = await Airbnb.find({ name: 'Ribeira Charming Duplex' })
    //     return property
    //   }
  };