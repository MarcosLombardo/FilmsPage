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

// Implementación de la clase Repository
class NuevaPelicula {
    // Creación de la película a partir de los datos que me proporciona el formulario
    static crearPelicula() {
        const title = document.getElementById("title").value.trim();
        const year = document.getElementById("year").value.trim();
        const director = document.getElementById("director").value.trim();
        const duration = document.getElementById("duration").value.trim();
        const genre = document.getElementById("genre").value.trim();
        const rate = document.getElementById("rate").value.trim();
        const poster = document.getElementById("poster").value.trim();

        // Validación de los campos del formulario y la URL del póster
        if (
            !title ||
            !year ||
            !director ||
            !duration ||
            !genre ||
            !rate ||
            !isValidImageUrl(poster)
        ) {
            console.log(
                "Faltan datos obligatorios. La película no se guardará."
            );
            return null; // Devuelve null para indicar que la validación ha fallado
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

    // Crear metodo estatico para guardar la pelicula en la base de datos

    // Crear metodo estatico para limpiar el formulario una vez que se complete el llenado de datos

    // Funcion para validar la URL de la imagen
    isValidImageUrl(url) {
        // Expresión regular para verificar si la URL termina con una extensión de imagen común
        const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
        return imageExtensions.test(url);
    }
}

// crear un manejador de evento que limpie el formulario con el boton LIMPIAR

// Crear una nueva instancia de Repository

// Exportar la funcion para guardar la pelicula
