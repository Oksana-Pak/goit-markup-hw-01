const galleryRef = document.querySelector('.gallery');

// ?api_key=0b0e3aacc3da91b758b4697a8f18cb42

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';
let page = 1;

async function createGalery() {
  const genresArray = await fetchGenres().then(data => data.genres);
  const filmsArray = await fetchAPI(page).then(data => data.results);
  createGenres(filmsArray, genresArray);
  markupCard(filmsArray);
}

createGalery();

function fetchAPI(page) {
  return fetch(`${URL}/trending/movie/day?api_key=${API_KEY}&page=${page}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchGenres() {
  return fetch(`${URL}/genre/movie/list?api_key=${API_KEY}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function markupCard(filmsArray) {
  const markup = filmsArray
    .map(({ id, poster_path, title, genre_name, release_date, vote_average }) => {
      const date = release_date.slice(0, 4);
      const rating = vote_average.toFixed(1);
      return `
      <li class="gallery__item card-set">
        <a class="link" href="">
            <img class="gallery__img" data-id="${id}" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" loading="lazy" />
            <div>
                <h2 class="gallery__title">${title}</h2>
                <div class="gallery__wrap">
                    <p class="gallery__ganres">${genre_name} | ${date}</p>
                    <p class="gallery__rating">${rating}</p>
                </div>
            </div>
      </a>
    </li>
`;
    })
    .join('');
  galleryRef.innerHTML = markup;
}

function createGenres(films, genres) {
  films.forEach(film => {
    const names = film.genre_ids.map(id => {
      return genres.find(genre => genre.id === id).name;
    });

    film.genre_name = names.length < 3 ? names.join(', ') : `${names[0]}, ${names[1]}, Others...`;
  });
}
// =================================================================================================

const backdropRef = document.querySelector('.backdrop');
const closeModalBtnRef = document.querySelector('.close-btn');

galleryRef.addEventListener('click', onPosterClick);

function onPosterClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains(`gallery__img`)) {
    return;
  }

  const idValue = e.target.dataset.id;
  toggleModal();

  fetchId(idValue).then(renderModalWindow);
  closeModalBtnRef.addEventListener('click', toggleModal());
}

function fetchId(id) {
  return fetch(`${URL}/movie/${id}?api_key=${API_KEY}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  backdropRef.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function renderModalWindow({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  const vote = vote_average.toFixed(1);
  const populary = popularity.toFixed(1);
  const genre = getGenres(genres);

  const markupModal = `<div class="modal"><div class="modal__container">
          <button class="close-btn">
            <svg class="close-btn__icon" width="18" height="18">
              <use href="./icon.svg#icon-close-modal"></use>
            </svg>
          </button>
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" />
    <div class="content-wrapper">
      <h3 class="modal-title">${original_title}</h3>
      <div class="container-text">
        <p class="content-text">Vote / Votes</p>
        <p class="content-text">Popularity</p>
        <p class="content-text">Original Title</p>
        <p class="content-text">Genre</p>
      </div>
      <div class="container-values">
        <p class="content-values">${vote} / ${vote_count}</p>
        <p class="content-values">${populary}</p>
        <p class="content-values">${original_title}</p>
        <p class="content-values">${genre}</p>
      </div>
      <h4 class="content-title">ABOUT</h4>
      <p class="content-desc">${overview}</p>
      <div class="btn-wrap">
        <button type="button">add to watched</button>
        <button type="button">add to queue</button>
      </div>
    </div>
        </div>
        </div>`;

  backdropRef.innerHTML = markupModal;
}

function getGenres(array) {
  return array.map(obj => obj.name).join(', ');
}
