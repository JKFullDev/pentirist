// src/components/ImageGrid/ImageGrid.js
import "./ImageGrid.css";

const ImageGrid = () => {
  const ul = document.createElement("ul");
  ul.id = "photo-container";
  return ul;
};

export const renderPhotos = (container, photos) => {
  container.innerHTML = "";
  if (photos.length === 0) {
    container.innerHTML = "<h2 class='error'>Try another word</h2>";
    return;
  }
  photos.forEach(photo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${photo.original_photo}" target="_blank">
        <img src="${photo.photo}" alt="${photo.alt}" />
      </a>
    `;
    container.appendChild(li);
  });
};

export default ImageGrid;
