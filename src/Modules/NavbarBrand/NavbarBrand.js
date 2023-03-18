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
        <div
            className={`
                ${
                    onScrollState == false
                        ? Styles.navbarBrand
                        : Styles.navbarBrand_scrolled
                }`}
            onScroll={() => setOnScrollState(true)}
        >
            <NavbarBurgerIcon
                state={burgerMenuIsActive}
                changeState={openBurgerMenu}
            />
            <NavbarBurgerMenu
                state={burgerMenuIsActive}
                changeState={closeBurgerMenu}
            />
        </div>
    );
};

export default NavbarBrand;
