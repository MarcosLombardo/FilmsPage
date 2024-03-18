const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },
};
