import React from "react";
import Styles from "./LogoMountains.module.css";

const LogoMountains = (props) => {
    return (
        <div
            className={`${
                props.size === "small"
                    ? Styles.logo_small
                    : Styles.logo
            }`}
        ></div>
    );
};

export default LogoMountains;
