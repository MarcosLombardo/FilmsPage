const filmSection = document.getElementById('films');

$.get("https://students-api.2.us-1.fl0.io/movies", (data)=> data.forEach(renderFilms));

function renderFilms (movie) {
    const containerMovie = document.createElement('div');
    containerMovie.classList.add('tarjeta');

    containerMovie.innerHTML = `<div class="face front">
                                <img src="${movie.poster}" alt="${movie.title}">
                                </div>
                                <div class="face back">
                                <h3>${movie.title} (${movie.year})</h3>
                                <div class="separador">
                                </div>
                                <p>${movie.duration}</p>
                                <p>${movie.director}</p>
                                <p>${movie.genre}</p>
                                <p>${movie.rate}</p>
                                </div> `;

    filmSection.appendChild(containerMovie);

}
