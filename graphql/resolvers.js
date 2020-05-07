

const people = {
    name : "Lee Ho Sung",
    age : 25
}

const resolvers = {
    Query: {
      person : () => people
    }
  };


export default resolvers;