const mongoose = require("mongoose");

const movieSquema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,
});

const Movie = mongoose.model("Movie", movieSquema);

module.exports = Movie;
