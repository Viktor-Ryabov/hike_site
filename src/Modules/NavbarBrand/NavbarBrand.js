import { useState } from "react";
import NavbarBurgerIcon from "./Components/NavbarBurgerIcon/NavbarBurgerIcon";
import Styles from "./NavbarBrand.module.css";
import NavbarBurgerMenu from "./Components/NavbarBurgerMenu/NavbarBurgerMenu";

const NavbarBrand = () => {
    const [burgerMenuIsActive, setBurgerMenuState] = useState(false);
    const [onScrollState, setOnScrollState] = useState(false);
    const openBurgerMenu = () => {
        setBurgerMenuState(true);
    };
    const closeBurgerMenu = () => {
        setBurgerMenuState(false);
    };

    return (
        <div className={Styles.navbarBrand}>
            <NavbarBurgerIcon
                state={burgerMenuIsActive}
                changeState={openBurgerMenu}
            />
            <NavbarBurgerMenu
                state={burgerMenuIsActive}
                changeState={closeBurgerMenu}
            />
            <h2 className={Styles.h2}>HEADER</h2>
        </div>
    );
};

export default NavbarBrand;
