// src/components/Main/Main.js
import ImageGrid from "../ImageGrid/ImageGrid";
import "./Main.css";

const Main = () => `
  <main class="main-container">
    <section id="results-section" class="results-section">
      ${ImageGrid()}
    </section>

    <section id="suggestions-section" class="suggestions-section">
      <!-- Aquí irán las búsquedas sugeridas (Suggestions) -->
    </section>

    <section id="pagination-section" class="pagination-section">
      <!-- Aquí irá la paginación -->
    </section>
  </main>
`;

export default Main;
