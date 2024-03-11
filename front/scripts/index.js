const renderFilms = require('./renderCards.js');
const axios = require('axios');

/* --------------------------------------------- Renderizar la API con jQuery --------------------------------------------- */

// $.get("https://students-api.2.us-1.fl0.io/movies", (data)=> data.forEach(renderFilms));


/* --------------------------------------------- Renderizar la API con una promesa --------------------------------------------- */

// const promise = axios.get("https://students-api.2.us-1.fl0.io/movies");

// promise
//     .then((res) => {
//         const movies = res.data;
//         movies.forEach(movie => {
//             renderFilms(movie);
//         });
//     })
//     .catch((err) => {
//         console.error("No se encuentra la API");
//     });

/* --------------------------------------------- Renderizar la API con async/await --------------------------------------------- */


const fetchMovies = async () => {
    try {
        const data = await axios.get("https://students-api.2.us-1.fl0.io/movies");
        const movies = res.data;
            movies.forEach(movie => {
            renderFilms(movie);
        });
    } catch (err) {
        console.error("No se encuentra la API");
    }   
}

fetchMovies();
