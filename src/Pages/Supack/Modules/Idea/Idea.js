import React from "react";
import Styles from "./Idea.module.css";
import ideaFoto from "../../../../Images/Supack/supack-2packs.jpeg";
const Idea = () => {
    return (
        <section className={Styles.camera} id="camera">
            <p className={Styles.camera__blockName}>Идея</p>
            <h3 className={Styles.camera__title}>Вкусно Удобно Полезно</h3>
            <img
                src={ideaFoto}
                alt="густой зеленый лес"
                className={Styles.camera__foto}
            />
            <p className={Styles.camera__feedbackText}>
                Блюда упакованы в пищевую вакуумную плёнку, которая не порвётся
                и не промокнет. В одном пакете - одно блюдо на один прием пищи.
            </p>
            <p className={Styles.camera__feedbackText + " " + Styles.camera__feedbackText_2}>
                Блюда расфасованы по порциям на 1 или 2, или 5 человек.
                Расчитана требуемая каллорийность в зависимости от вида
                активного отдыха.
            </p>
        </section>
    );
};

export default Idea;
