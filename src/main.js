// Importa estilos y componentes principales
import './styles/style.css';
import fetchImages from './utils/fecthImages.js';

import Header from './components/Header/Header.js';
import ImageGrid, { renderPhotos } from './components/ImageGrid/ImageGrid.js';
import Pagination from './components/Pagination/Pagination.js';

// Selecciona el body y añade los componentes principales
const body = document.body;
body.prepend(Header());
const imageGrid = ImageGrid();
body.appendChild(imageGrid);
body.appendChild(Pagination());

// Selecciona los elementos del DOM necesarios para la interacción
const photo_input = document.querySelector("#photo_input");
const search_btn = document.querySelector("#search_btn");
const color_input = document.querySelector("#color_input");
const prev_btn = document.querySelector("#prevBtn");
const next_btn = document.querySelector("#nextBtn");
const imgNum_input = document.querySelector("#imgNum_input"); // Input para imágenes por página
const orientation_input = document.querySelector("#orientation_input");

let currentPage = 1;      // Página actual
let currentKeyword = "";  // Palabra clave actual de búsqueda

// Función principal para obtener y mostrar fotos según los filtros y la página
const getPhotos = async (keyword, page = 1) => {
  currentPage = page;
  currentKeyword = keyword;
  const color = color_input.value;
  const orientation = orientation_input.value;
  color_input.value = "";
  orientation_input.value = "";

  photo_input.value = "";

  // Obtiene el número de imágenes por página, asegurando que esté entre 10 y 30
  let per_page = parseInt(imgNum_input.value, 10);
  if (isNaN(per_page) || per_page < 10) per_page = 10;
  if (per_page > 30) per_page = 30;

  try {
    // Llama a la función que obtiene las imágenes desde la API
    const photos = await fetchImages(keyword, color, orientation, page, per_page);
    // Renderiza las fotos en el grid
    renderPhotos(imageGrid, photos);
    // Actualiza el estado de los botones de paginación
    updatePaginationButtons();
  } catch (error) {
    alert("Página web no disponible => " + error.message);
  }
};

// Habilita o deshabilita el botón "Previous" según la página actual
const updatePaginationButtons = () => {
  prev_btn.disabled = currentPage === 1;
};

// Evento para buscar al hacer click en el botón de búsqueda
search_btn.addEventListener("click", () => {
  if (photo_input.value.trim()) getPhotos(photo_input.value.trim());
});

// Evento para buscar al pulsar Enter en el input de búsqueda
photo_input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && photo_input.value.trim()) {
    getPhotos(photo_input.value.trim());
  }
});

// Evento para ir a la página anterior
prev_btn.addEventListener("click", () => {
  if (currentPage > 1) getPhotos(currentKeyword, currentPage - 1);
});

// Evento para ir a la página siguiente
next_btn.addEventListener("click", () => {
  getPhotos(currentKeyword, currentPage + 1);
});

// Al cargar la página, realiza una búsqueda inicial de "capybara"
window.addEventListener("DOMContentLoaded", () => {
  getPhotos("capybara");
});

// Permite que la función getPhotos sea accesible globalmente (para sugerencias)
window.getPhotos = getPhotos;
