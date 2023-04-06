import React from "react";
import Styles from "./Person.module.css";
import ArticleAbout from "../../UI/ArticleAbout/ArticleAbout";
import FotoAbout from "../../UI/FotoAbout/FotoAbout.js";
import Title from "../../UI/Title/Title";

const Person = ({ props }) => {
    return (
        <div
            className={
                Styles.person +
                " " +
                `${
                    props.orientation === "Left"
                        ? Styles.fotoLeft
                        : Styles.fotoRight
                }`
            }
        >
            <div className={Styles.textBlock}>
                <ArticleAbout text={props.textHello} />
                <ArticleAbout text={props.textAbout} />
                <ArticleAbout text={props.textAbout2} />
            </div>
            <FotoAbout image={props.image} />
            <Title orientation={props.orientation} name={props.name} />
        </div>
    );
};

export default Person;
