const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },

    addMovies: async (title, year, director, duration, genre, rate, poster) => {
        try {
            const newMovie = await Movie.create({
                title,
                year,
                director,
                duration,
                genre,
                rate,
                poster,
            });
            return newMovie;
        } catch (error) {
            console.error("Error al agregar la palícula:", error.message);
            throw error;
        }
    },
};
