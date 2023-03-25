import { useState } from "react";
import Styles from "./NavbarBrand.module.css";
import Contacts from "../../UI/Contasts/Contacts";
import LogoSection from "../../UI/LogoSection/LogoSection.js";
import SupackButton from "../SupackButton/SupackButton";

const NavbarBrand = () => {
    return (
        <div className={Styles.navbarBrand}>
                <SupackButton />
                <LogoSection size="" />
                <Contacts />
        </div>
    );
};

export default NavbarBrand;
