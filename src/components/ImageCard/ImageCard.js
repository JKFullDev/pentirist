// src/components/ImageCard/ImageCard.js
import "./ImageCard.css";

const ImageCard = (image) => {
  // image es un objeto con info de Unsplash (urls, alt, etc)
  return `
    <article class="image-card">
      <img 
        src="${image.urls.small}" 
        alt="${image.alt_description || 'Imagen Pentirist'}" 
        loading="lazy"
        class="image-card-img"
      />
      <p class="image-card-description">${image.description || image.alt_description || 'Sin descripción'}</p>
      <a href="${image.user.links.html}" target="_blank" rel="noopener" class="image-card-author">
        ${image.user.name}
      </a>
    </article>
  `;
};

export default ImageCard;
