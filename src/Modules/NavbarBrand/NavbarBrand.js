import { useState } from "react";
import NavbarBurgerIcon from "./Components/NavbarBurgerIcon/NavbarBurgerIcon";
import Styles from "./NavbarBrand.module.css";
import NavbarBurgerMenu from "./Components/NavbarBurgerMenu/NavbarBurgerMenu";
import Logo from "../../UI/Logo/Logo";
import { NavBarLink } from "./Components/NavBarLink/NavBarLink";
import NavbarButton from "./Components/NavbarButton/NavbarButton";
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
                <Logo />
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
            {/* <div className={Styles.buttonSection}>
                <NavbarButton text="СПЛАНИРОВАТЬ ПОХОД" />
                <NavbarButton text="СХОДИТЬ НА ВАИФЕРАТУ" />
            </div> */}

            {/* <h2 className={Styles.h2}>HEADER</h2> */}
            
        </div>
    );
};

export default NavbarBrand;
