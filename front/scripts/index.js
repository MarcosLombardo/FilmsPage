const renderFilms = require("./renderCards.js");
const axios = require("axios");

/* --------------------------------------------- Renderizar la API con jQuery --------------------------------------------- */

// $.get("https://students-api.2.us-1.fl0.io/movies", (data)=> data.forEach(renderFilms));

/* --------------------------------------------- Renderizar la API con una promesa --------------------------------------------- */

// const promise = axios.get("https://students-api.up.railway.app/movies");

// promise
//     .then((res) => {
//         const movies = res.data;
//         movies.forEach(movie => {
//             renderFilms(movie);
//         });
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

/* --------------------------------------------- Renderizar la API con async/await --------------------------------------------- */

const fetchMovies = async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/movies");
        data.forEach(renderFilms);
    } catch (error) {
        console.log(error.message);
    }
};

fetchMovies();
