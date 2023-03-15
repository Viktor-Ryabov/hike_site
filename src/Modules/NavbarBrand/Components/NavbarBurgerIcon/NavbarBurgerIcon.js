import Styles from "./NavbarBurgerIcon.module.css";
import LogoMenu from "../../../../Images/burger_menu.png";

const NavbarBurgerIcon = () => {
    return (
        <>
            <img alt="меню" className={Styles.logo} src={LogoMenu} />
        </>
    );
};

export default NavbarBurgerIcon;
