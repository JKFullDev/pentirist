import "./ImageGrid.css";

// Componente ImageGrid: crea el contenedor para las imágenes
const ImageGrid = () => {
  const ul = document.createElement("ul");
  ul.id = "photo-container";
  return ul;
};

// Función para renderizar las fotos en el contenedor
export const renderPhotos = (container, photos) => {
  container.innerHTML = "";
  const paginationFooter = document.querySelector("footer");
  // Si no hay resultados, muestra mensaje y botones sugeridos
  if (photos.length === 0) {
    container.innerHTML = `
    <div class="no-results-container">
      <h2 class='error'>No results found. Try with:</h2>
      <div id="suggestions">
        <button class="suggest-btn">Cat</button>
        <button class="suggest-btn">Dog</button>
        <button class="suggest-btn">Nature</button>
      </div>
    </div>
  `;
    // Oculta la paginación
    if (paginationFooter) paginationFooter.classList.add("hide-pagination");
    // Añade eventos a los botones sugeridos
    document.querySelectorAll(".suggest-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const photoInput = document.querySelector("#photo_input");
        photoInput.value = btn.textContent;
        window.getPhotos(btn.textContent);
      });
    });
    return;
  }
  // Si hay resultados, muestra cada foto en el grid
  photos.forEach(photo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${photo.photo}" alt="${photo.alt || 'Photo'}" />
    `;
    container.appendChild(li);
  });
  // Muestra la paginación
  if (paginationFooter) paginationFooter.classList.remove("hide-pagination");
};

export default ImageGrid;