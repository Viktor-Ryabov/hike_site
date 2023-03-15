import Styles from "./NavbarBurgerMenu.module.css";
import { useState } from "react";
import { NavBarLink } from "../NavBarLink/NavBarLink";
import CloseIcon from "../../UI/CloseIcon";

const NavbarBurgerMenu = (props) => {
    return (
        <div
            className={`${
                props.state == false
                    ? Styles.navBarMenu
                    : Styles.navBarMenu_active
            }`}
        >
            <h2> Меню</h2>
            <CloseIcon closeMenu={props.changeState} />
            <NavBarLink text="qwert1" />
            <NavBarLink text="qwert2" />
            <NavBarLink text="qwert3" />
            <NavBarLink text="qwert4" />
        </div>
    );
};

export default NavbarBurgerMenu;
