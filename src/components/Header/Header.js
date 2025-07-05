import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";

const Header = () => `
<header>
    <img src="https://seekvectors.com/files/download/pintest-blue-circle-outline-logo-01.png" alt="Pinterest Logo" />
    ${Nav()}
    ${SearchBar()}
</header>
`;

export default Header;