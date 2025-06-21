import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => `
<header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest Logo" />
    ${Nav()}
</header>
`;

export default Header;