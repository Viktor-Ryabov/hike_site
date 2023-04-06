import React from "react";
import Styles from "./Person.module.css";
import ArticleAbout from "../../UI/ArticleAbout/ArticleAbout";
import FotoAbout from "../../UI/FotoAbout/FotoAbout.js";
import Title from "../../UI/Title/Title";

const Person = ({ props }) => {
    return (
        <div
            className={
                Styles.person + " " +
                `${
                    props.orientation === "Left"
                        ? Styles.fotoLeft
                        : Styles.fotoRight
                }`
            }
        >
            <ArticleAbout text={props.text} />
            <FotoAbout image={props.image} />
            <Title orientation={props.orientation} name={props.name} />
        </div>
    );
};

export default Person;
