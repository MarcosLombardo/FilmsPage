const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router();

router.get("/movies", moviesController.getAllMovies);

router.post("/movies", moviesController.addAllMovies);

module.exports = router;
