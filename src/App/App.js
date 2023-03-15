// import { Fire } from "../Fire/Fire";
// import { Camp } from "../Camp/Camp";
import NavbarBrand from "../Modules/NavbarBrand/NavbarBrand";
import Styles from "./App.module.css";


export const App = () => {
    return (
        <div className={Styles.app}>
            <NavbarBrand />
        </div>
    );
};
