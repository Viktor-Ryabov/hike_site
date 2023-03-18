// import { Fire } from "../Fire/Fire";
// import { Camp } from "../Camp/Camp";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Styles from "./App.module.css";
import TabBarProducts from "../../Pages/Main/Components/TabBarProducts/TabBarProducts";


export const App = () => {
    return (
        <div className={Styles.app}>
            <NavbarBrand />
            <TabBarProducts />
        </div>
    );
};
