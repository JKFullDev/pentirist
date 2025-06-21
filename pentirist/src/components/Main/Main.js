import "./Main.css";
import Text from "../Text/Text";

const Main = () => {

    return `<main>
    ${Text("Hola", "md", "justify")}
    ${Text("Hola", "lg", "right")}
    ${Text("Hola", "md", "justify")}
    ${Text("Hola", "md", "justify")}
    </main>`;
};

export default Main;