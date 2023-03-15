import Styles from "./NavbarBurgerIcon.module.css";
import LogoMenu from "../../../../Images/burger_menu.png";

const NavbarBurgerIcon = (props) => {
    // console.log(props);
    return (
        <div onClick={props.changeState} className={`${props.state == true? Styles.buttonIsDisabled : ""}`}>
            <img alt="меню" className={Styles.logo} src={LogoMenu} />
        </div>
    );
};

export default NavbarBurgerIcon;
