import NavbarBurgerIcon from "./Components/NavbarBurgerIcon/NavbarBurgerIcon";
import Styles from "./NavbarBrand.module.css";
import NavbarBurgerMenu from "./Components/NavbarBurgerMenu/NavbarBurgerMenu";

const NavbarBrand = () => {
    return(
    <div className={Styles.navbarBrand}>
        <NavbarBurgerIcon />
        <NavbarBurgerMenu />
    </div>
    )
};

export default NavbarBrand;
