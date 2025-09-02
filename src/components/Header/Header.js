import "./Header.css";

const Header = () => {
    const header = document.createElement("header");
    header.innerHTML = `
    <div class="logo">
    <img src="https://seekvectors.com/files/download/pintest-blue-circle-outline-logo-01.png" alt="Pinterest Logo" />
    </div>
    <div class="searchBar">
    <input id="photo_input" type="text" placeholder="Search" />
    <select id="color_input">
      <option value="">Color</option>
      <option value="black_and_white">Black and white</option>
      <option value="orange">Orange</option>
      <option value="green">Green</option>
    </select>
    
  <input id="imgNum_input" type="number" min="10" max="30" placeholder="  IpP" title="Images per page">
    <button id="search_btn">Search</button>
    </div>
    `;

    return header;
};

export default Header; 