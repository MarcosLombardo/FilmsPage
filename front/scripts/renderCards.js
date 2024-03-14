const filmSection = document.getElementById("films");

function renderFilms(movie) {
    const containerMovie = document.createElement("div");
    containerMovie.classList.add("tarjeta");

    containerMovie.innerHTML = `<div class="face front">
                                <img src="${movie.poster}" alt="${movie.title}">
                                </div>
                                <div class="face back">
                                <h3>${movie.title}</h3>
                                <p><span class="text-year">(${
                                    movie.year
                                })</span></p>
                                <div class="separador">
                                </div>
                                <p><span class="text-duration">${
                                    movie.duration
                                }</span> | <span class="star">☆</span> <span class="text-rate">${
        movie.rate
    }</span></p>
                                <p><span class="text-director">Director:</span> <span class="text-director-name">${
                                    movie.director
                                }</span></p>
                                <p><span class="text-genre">Género:</span> <span class="text-genres">${movie.genre.join(
                                    ", "
                                )}</span></p>
                                </div> `;

    filmSection.appendChild(containerMovie);
}

module.exports = renderFilms;
