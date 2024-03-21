const axios = require("axios");

class Pelicula {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

class NuevaPelicula {
    static crearPelicula() {
        const titleInput = document.getElementById("title");
        const yearInput = document.getElementById("year");
        const directorInput = document.getElementById("director");
        const durationInput = document.getElementById("duration");
        const genreInput = document.getElementById("genre");
        const rateInput = document.getElementById("rate");
        const posterInput = document.getElementById("poster");

        // Validación título
        let title = titleInput.value
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());

        // Validación año
        const year = parseInt(yearInput.value.trim(), 10);
        if (isNaN(year) || year < 1895 || year > 2024) {
            throw new Error("Año inválido.");
        }

        // Validación director
        let director = directorInput.value
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());

        // Validación duración
        const duration = durationInput.value.trim().toLowerCase();

        // Validación género
        const genre = genreInput.value
            .trim()
            .split(",")
            .map((genre) => genre.trim());

        // Validación ranking
        const rate = parseFloat(rateInput.value.trim());
        if (isNaN(rate) || rate < 1 || rate > 10) {
            throw new Error("Puntuación inválida.");
        }

        // Validación imágen
        const poster = posterInput.value.trim();
        if (!esUrlImagenValida(poster)) {
            throw new Error("URL de imagen inválida.");
        }

        return new Pelicula(
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        );
    }
}

function esUrlImagenValida(url) {
    const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
    return imageExtensions.test(url);
}

class PeliculaRepository {
    static async guardarPelicula() {
        try {
            const pelicula = NuevaPelicula.crearPelicula();
            const response = await axios.post(
                "http://localhost:3000/movies",
                pelicula
            );
            console.log("Datos enviados:", response.data);
        } catch (error) {
            console.error("Error al guardar la película:", error.message);
        }
    }
}

const cleanButton = document.getElementById("clean");
cleanButton?.addEventListener("click", () => {
    document.getElementById("formulario").reset();
});

module.exports = PeliculaRepository;
