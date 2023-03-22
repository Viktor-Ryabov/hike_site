import { useState } from "react";
import NavbarBurgerIcon from "./Components/NavbarBurgerIcon/NavbarBurgerIcon";
import Styles from "./NavbarBrand.module.css";
import NavbarBurgerMenu from "./Components/NavbarBurgerMenu/NavbarBurgerMenu";
import Logo from "../../UI/Logo/Logo";
import Contacts from "../../UI/Contasts/Contacts";
import LogoMountains from "../../UI/LogoMountains/LogoMountains";
import LogoSection from "../../UI/LogoSection/LogoSection.js";
import { Link } from "react-router-dom";

const NavbarBrand = () => {
    const [burgerMenuIsActive, setBurgerMenuState] = useState(false);
    const openBurgerMenu = () => {
        setBurgerMenuState(true);
    };
    const closeBurgerMenu = () => {
        setBurgerMenuState(false);
    };

    return (
        <div className={Styles.navbarBrand}>
            <div className={Styles.logoSection}>
                {/* <Link to="/" className={Styles.link}> */}
                    <LogoSection size="" />
                {/* </Link> */}
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
