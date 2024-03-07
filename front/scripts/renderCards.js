const filmSection = document.getElementById('films');

function renderFilms (movie) {
    const containerMovie = document.createElement('div');
    containerMovie.classList.add('tarjeta');

    containerMovie.innerHTML = `<div class="face front">
                                <img src="${movie.poster}" alt="${movie.title}">
                                </div>
                                <div class="face back">
                                <h3><strong>${movie.title}</strong> <span class="text-fecha">(${movie.year})</span></h3>
                                <div class="separador">
                                </div>
                                <p>${movie.duration} | ☆ ${movie.rate}</p>
                                <p><span class="maq">Director:</span> <span class="text-fecha">${movie.director}</span></p>
                                <p><span class="maq">Genre:</span> <span class="text-fecha">${movie.genre.join(', ')}</span></p>
                                </div> `;

    filmSection.appendChild(containerMovie);

}

module.exports = renderFilms;