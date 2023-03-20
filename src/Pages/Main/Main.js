import React from "react";
import Styles from "../Main/Main.module.css";
import { UtpAndForm } from "./Components/UtpAndForm/UtpAndForm";
import TabBarProducts from "./Components/TabBarProducts/TabBarProducts";
import MainVideo from "./Components/MainVideo/MainVideo";

const Main = () => {
    return (
        <section className={Styles.main}>
            {/* <UtpAndForm /> */}
            <MainVideo />
            <TabBarProducts />
        </section>
    );
};

export default Main;