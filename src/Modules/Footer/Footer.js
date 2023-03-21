import React from "react";
import Styles from "./Footer.module.css";
import Logo from "../../UI/Logo/Logo";
import Contacts from "../../UI/Contasts/Contacts";

const Footer = () => {
    return (
        <section className={Styles.footer}>
                <Logo size="small"/>
                <Contacts />
        </section>
    );
};

export default Footer;
