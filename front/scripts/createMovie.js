const axios = require("axios");

// Implementación de la clase Pelicula
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

// Clase para manejar la creación de películas a partir de datos del formulario
class NuevaPelicula {
    static crearPelicula() {
        const titleInput = document.getElementById("title");
        const yearInput = document.getElementById("year");
        const directorInput = document.getElementById("director");
        const durationInput = document.getElementById("duration");
        const genreInput = document.getElementById("genre");
        const rateInput = document.getElementById("rate");
        const posterInput = document.getElementById("poster");

        // Validación y formateo del título
        let title = titleInput.value
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());

        // Validación del año
        const year = parseInt(yearInput.value.trim(), 10);
        if (isNaN(year) || year < 1895 || year > 2025) {
            throw new Error("Año inválido.");
        }

        // Validación y formateo del director
        let director = directorInput.value
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());

        // Validación de la duración
        const duration = durationInput.value.trim().toLowerCase();

        // Validación y formateo del género
        const genre = genreInput.value
            .trim()
            .split(",")
            .map((genre) => genre.trim());

        // Validación del rate
        const rate = parseFloat(rateInput.value.trim());
        if (isNaN(rate) || rate < 1 || rate > 10) {
            throw new Error("Puntuación inválida.");
        }

        // Validación del poster (puedes usar una función de validación de URL de imagen)
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

// Clase para manejar la interacción con la API para guardar películas
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
            // Aquí podrías manejar el error de una manera más específica, por ejemplo, mostrando un mensaje al usuario.
        }
    }
}

// Manejador de eventos para el botón "Limpiar"
const cleanButton = document.getElementById("clean");
cleanButton?.addEventListener("click", () => {
    document.getElementById("formulario").reset();
});

module.exports = PeliculaRepository;
