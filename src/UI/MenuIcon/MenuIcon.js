import React from "react";
import Styles from "./MenuIcon.module.css";

const MenuIcon = (props) => {
    return (
        <>
            <img className={Styles.menuIcon} src={props.link} alt="весна" />
        </>
    );
};

export default MenuIcon;
