import React from "react";
import Styles from "../Main/Main.module.css";
// import { UtpAndForm } from "./Components/UtpAndForm/UtpAndForm";
import TabBarProducts from "./Components/TabBarProducts/TabBarProducts";
import MainVideo from "./Modules//MainVideo/MainVideo";

const Main = () => {
    return (
        
        <section className={Styles.main}>
            <meta name="description" content="Походы в Крыму, скалолазание в Крыму, виа феррата Севастополь, десткие походы в Крыму. "/>
            <MainVideo />
            <TabBarProducts />
        </section>
    );
};

export default Main;