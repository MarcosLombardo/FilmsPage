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
};
