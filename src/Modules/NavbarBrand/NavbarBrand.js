import { useState } from "react";
import NavbarBurgerIcon from "./Components/NavbarBurgerIcon/NavbarBurgerIcon";
import Styles from "./NavbarBrand.module.css";
import NavbarBurgerMenu from "./Components/NavbarBurgerMenu/NavbarBurgerMenu";
import Logo from "../../UI/Logo/Logo";
import Contacts from "../../UI/Contasts/Contacts";

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
            <div className={Styles.logoSection}>
                <Logo size=""/>
                <NavbarBurgerIcon
                    state={burgerMenuIsActive}
                    changeState={openBurgerMenu}
                />
                <NavbarBurgerMenu
                    state={burgerMenuIsActive}
                    changeState={closeBurgerMenu}
                />
                <Contacts />
            </div>
        </div>
    );
};

export default NavbarBrand;
