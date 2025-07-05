import "./SearchBar.css";

const SearchBar = () => {

    return `
     <div class="searchbar-container">
    <input
      type="text"
      id="search-input"
      class="searchbar-input"
      placeholder="Buscar imágenes en Pentirist..."
    />
    <button id="search-button" class="searchbar-button">Buscar</button>
  </div>
    `


};

export default SearchBar;