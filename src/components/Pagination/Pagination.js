import "./Pagination.css";

// Componente Pagination: crea los botones de paginación
const Pagination = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <button id="prevBtn">Previous</button>
    <button id="nextBtn">Next</button>
  `;
  return footer;
};

export default Pagination;
