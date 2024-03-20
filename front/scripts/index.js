const renderFilms = require("./renderCards.js");
const axios = require("axios");
const PeliculaRepository = require("./createMovie.js");

const fetchMovies = async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/movies");
        data.forEach(renderFilms);
    } catch (error) {
        console.log(error.message);
    }
};

fetchMovies();

const botonGuardar = document.getElementById("create");
botonGuardar?.addEventListener("click", PeliculaRepository.guardarPelicula);
