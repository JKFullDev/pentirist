// src/components/ImageGrid/ImageGrid.js
import "./ImageGrid.css";
import ImageCard from "../ImageCard/ImageCard.js";

const ImageGrid = (images = []) => {
  if (images.length === 0) {
    return `<p class="no-results">No se encontraron imágenes.</p>`;
  }

  return `
    <section class="image-grid"><div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>

      ${images.map(img => ImageCard(img)).join('')}
    </section>
  `;
};

export default ImageGrid;
