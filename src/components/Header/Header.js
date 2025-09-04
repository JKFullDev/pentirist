import "./Header.css";

// Componente Header: crea el header con logo, barra de búsqueda y filtros
const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="logo">
      <img src="https://seekvectors.com/files/download/pintest-blue-circle-outline-logo-01.png" alt="Pinterest Logo" />
    </div>
    <button id="open" class="open-menu"><i class="bi bi-list"></i></button>
    <nav class="nav" id="nav">
      <button class="close-menu" id="close"><i class="bi bi-x"></i></button>
      <div class="searchBar">
        <input id="photo_input" type="text" placeholder="Something..." />
        <select id="orientation_input">
          <option value="">Orientation</option>
          <option value="landscape">Horizontal</option>
          <option value="portrait">Vertical</option>
          <option value="squarish">Cuadrada</option>
        </select>
        <select id="color_input">
          <option value="">Color</option>
          <option value="black_and_white">Black and white</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
        </select>
        <input id="imgNum_input" type="number" min="10" max="30" placeholder="  IpP" title="Images per page">
        <button id="search_btn">Search</button>
      </div>
    </nav>
  `;

  // Añade funcionalidad para abrir/cerrar el menú en móvil
  const nav = header.querySelector("#nav");
  const open = header.querySelector("#open");
  const close = header.querySelector("#close");

  open.addEventListener("click", () => {
    nav.classList.add("visible");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("visible");
  });

  return header;
};

export default Header;