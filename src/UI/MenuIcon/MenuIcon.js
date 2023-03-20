import React from "react";
import Styles from "./MenuIcon.module.css";
import Icon from "../../Images/ryabov__logo_turizm_1.svg";

const MenuIcon = (props) => {
    return (
        <>
            <img className={Styles.menuIcon} src={props.link} alt="весна" />
        </>
    );
};

export default MenuIcon;
