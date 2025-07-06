import './styles/style.css';
import fetchImages from './utils/fecthImages.js';

import Header from './components/Header/Header.js';
import ImageGrid, { renderPhotos } from './components/ImageGrid/ImageGrid.js';
import Pagination from './components/Pagination/Pagination.js';

const body = document.body;

body.prepend(Header());
const imageGrid = ImageGrid();
body.appendChild(imageGrid);
body.appendChild(Pagination());

const photo_input = document.querySelector("#photo_input");
const search_btn = document.querySelector("#search_btn");
const color_input = document.querySelector("#color_input");
const prev_btn = document.querySelector("#prevBtn");
const next_btn = document.querySelector("#nextBtn");

let currentPage = 1;
let currentKeyword = "";

const getPhotos = async (keyword, page = 1) => {
  currentPage = page;
  currentKeyword = keyword;
  const color = color_input.value;
  color_input.value = "";

  try {
    const photos = await fetchImages(keyword, color, page);
    renderPhotos(imageGrid, photos);
    updatePaginationButtons();
  } catch (error) {
    alert("Página web no disponible => " + error.message);
  }
};

const updatePaginationButtons = () => {
  prev_btn.disabled = currentPage === 1;
};

search_btn.addEventListener("click", () => {
  if (photo_input.value.trim()) getPhotos(photo_input.value.trim());
});

prev_btn.addEventListener("click", () => {
  if (currentPage > 1) getPhotos(currentKeyword, currentPage - 1);
});

next_btn.addEventListener("click", () => {
  getPhotos(currentKeyword, currentPage + 1);
});

window.addEventListener("DOMContentLoaded", () => {
  getPhotos("capybara");
});
