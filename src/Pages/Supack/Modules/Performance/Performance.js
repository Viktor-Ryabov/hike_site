import React from "react";
import Styles from "./Performance.module.css"
import performanceFoto from "../../../../Images/Supack/supack-and-tomatos.jpeg";

const Performance = () => {
    return (
        <div className={Styles.fotoCourse}>
            <h3 className={Styles.fotoCourse__title}>
                SUPACK питание для outdoor
            </h3>
            <img
                src={performanceFoto}
                alt="лес в тумане"
                className={Styles.fotoCourse__foto}
            />
            <p className={Styles.fotoCourse__text}>
                Мы придумали себе классное питание для отдыха на природе,
                которое нам очень нравится.
            </p>
            <p className={Styles.fotoCourse__text2}>
                Теперь мы можем поделиться этим с Вами.
            </p>
            {/* <button className={Styles.fotoCourse__button} id="firstBlockButton">
                Консультация
            </button> */}
        </div>
    );
};

export default Performance;
