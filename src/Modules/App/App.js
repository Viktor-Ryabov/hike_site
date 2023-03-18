// import { Fire } from "../Fire/Fire";
// import { Camp } from "../Camp/Camp";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import { useRef, useLayoutEffect } from "react";
import Styles from "./App.module.css";
import TabBarProducts from "../../Pages/Main/Components/TabBarProducts/TabBarProducts";
import { UtpAndForm } from "../../Pages/Main/Components/UtpAndForm/UtpAndForm";

export const App = () => {
    return (
        <div className={Styles.app}>
            <NavbarBrand>
                
            </NavbarBrand>
            <UtpAndForm></UtpAndForm>
            <TabBarProducts />
        </div>
    );
};
