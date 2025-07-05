import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Nav = () => {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        }
    ];

    return `
    <nav>
        <ul>
            ${links.map((link) => `
                <li>
                    <a href="${link.path}">${link.name}<a/>
                </li>
            `).join("")} 
        </ul>
    </nav> 
    `
    //usamos el .join vacio para que no se escriba una coma por defecto entre li y li
}

export default Nav;