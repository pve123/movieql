import {getPeople,getPerson, getMovies} from "./db"

const resolvers = {
    Query: {
      people : () => getPeople(),
      person : (_,{id}) => getPerson(id),
      movies : (_,{limit,rating}) => getMovies(limit,rating)

    }
};


export default resolvers;