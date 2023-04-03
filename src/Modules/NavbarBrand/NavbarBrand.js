// import { useState } from "react";
import Styles from "./NavbarBrand.module.css";
import Contacts from "../../Modules/Contasts/Contacts.js";
import LogoSection from "../LogoSection/LogoSection.js";
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
