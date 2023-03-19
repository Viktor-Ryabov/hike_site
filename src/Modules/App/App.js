import Styles from "./App.module.css";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Footer from "../Footer/Footer";
import Main from "../../Pages/Main/Main";

export const App = () => {
    return (
        <div className={Styles.app}>
            <NavbarBrand />
            <Main />
            <Footer />
        </div>
    );
};
