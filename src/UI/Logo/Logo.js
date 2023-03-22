import React from "react";
import Styles from "./Logo.module.css";

const Logo = (props) => {
    return (
        <div
            className={`${
                props.size === "small" ? Styles.logo_small : Styles.logo
            }`}
        ></div>
    );
};

export default Logo;
