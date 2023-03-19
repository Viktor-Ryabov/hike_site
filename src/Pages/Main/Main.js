import React from "react";
import Styles from "../Main/Main.module.css";
import { UtpAndForm } from "./Components/UtpAndForm/UtpAndForm";
import TabBarProducts from "./Components/TabBarProducts/TabBarProducts";

const Main = () => {
    return (
        <section className={Styles.main}>
            <UtpAndForm />
            <TabBarProducts />
        </section>
    );
};

export default Main;
