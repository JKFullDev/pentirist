import "./Pagination.css";

const Pagination = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <button id="prevBtn">Previous</button>
    <button id="nextBtn">Next</button>
  `;
  return footer;
};
export default Pagination;
