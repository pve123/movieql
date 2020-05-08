import fetch, { Request } from "node-fetch";

const people = [
    {
      id: 1,
      name : "Lee",
      age : 25
    },
    {
      id :2,   
      name : "Kim",
      age : 22
    },
    {
      id: 3,
      name : "Park",
      age : 23
    },
    {
      id: 4,
      name : "Cho",
      age : 21
    },
    {
      id: 5,
      name : "Ui",
      age : 31
    },
]




export const getPeople = () => people  // 모든 사람들

export const getPerson = id => {
    
    const filteredPeople = people.filter( person => person.id === id );
    return filteredPeople[0];
} //해당 Id에 해당하는 사람 출력

const API_URL = "https://yts.am/api/v2/list_movies.json?";


export const getMovies = (limit, rating) => {

  let REQUEST_API = API_URL;

  if(limit > 0 ){
    REQUEST_API += `limit=${limit}`;
  }
  if(rating > 0) {
    REQUEST_API += `&minimum_rating=${rating}`;
  }


return fetch(REQUEST_API)
.then(res => res.json())
.then(json => json.data.movies);
}
