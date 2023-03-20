import React, { Children } from "react";
import Styles from "./LeftSideNavbar.module.css";
import NavbarButton from "../NavbarBrand/Components/NavbarButton/NavbarButton";

const LeftSideNavbar = (props) => {
    return (
        <div className={props.size == "big" ? Styles.leftSideNavbar : Styles.leftSideNavbarSmall}>
            {props.children}
        </div>
    );
};

export default LeftSideNavbar;
