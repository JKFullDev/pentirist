import "./Header.css";

const Header = () => {
    const header = document.createElement("header");
    header.innerHTML = `
    <div class="logo">
    <img src="https://seekvectors.com/files/download/pintest-blue-circle-outline-logo-01.png" alt="Pinterest Logo" />
    </div>
    <div class="searchBar">
    <input id="photo_input" type="text" placeholder="¿Qué estás buscando?" />
    <select id="color_input">
      <option value="">Select color</option>
      <option value="black_and_white">Black and white</option>
      <option value="orange">Orange</option>
      <option value="green">Green</option>
    </select>
    <button id="search_btn">Search</button>
    </div>
    `;

    return header;
};

export default Header; 