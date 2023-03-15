import Styles from "./NavbarBurgerMenu.module.css";
import { NavBarLink } from "../NavBarLink/NavBarLink";

const NavbarBurgerMenu = () => {
    return (
        <div className={Styles.navBarMenu}>
            <NavBarLink text="qwert1" />
            <NavBarLink text="qwert2" />
            <NavBarLink text="qwert3" />
            <NavBarLink text="qwert4" />
        </div>
    );
};

export default NavbarBurgerMenu;
