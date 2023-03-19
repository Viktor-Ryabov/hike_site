import Styles from "./NavbarBurgerMenu.module.css";
import { useState } from "react";
import { NavBarLink } from "../NavBarLink/NavBarLink";
import CloseIcon from "../../../../UI/CloseIcon/CloseIcon.js";

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
            <NavBarLink text="О нас" />
            <NavBarLink text="Походная еда" />
            <NavBarLink text="Для новичков" />
            <NavBarLink text="Найти напаркника" />
            <NavBarLink text="Найти группу для похода" />
        </div>
    );
};

export default NavbarBurgerMenu;
