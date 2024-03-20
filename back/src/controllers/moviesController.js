const moviesService = require("../services/moviesService");

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor",
            });
        }
    },

    addAllMovies: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } =
            req.body;
        const newMovie = await moviesService.addMovies(
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        );
        res.status(201).json(newMovie);
    },
};
