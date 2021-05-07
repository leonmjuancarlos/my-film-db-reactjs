import axios from "axios";


export function getFilmByName(filmName) {
    const options = {
        method: 'GET',
        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${filmName}`,
        headers: {
          'x-rapidapi-key': '3f927a314cmshd726263e35daed6p127f1fjsn12b57ca06770',
          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
      };

      return axios.request(options).then(function (response) {
            return(response.data);
        }).catch(function (error) {
            console.error(error);
        });

}

