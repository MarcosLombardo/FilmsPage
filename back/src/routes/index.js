const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router();

router.get("/movies", moviesController.getAllMovies);

module.exports = router;
