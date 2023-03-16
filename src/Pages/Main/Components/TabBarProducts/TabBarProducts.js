import Styles from "./TabBarProducts.module.css";
import React from "react";
import { useState } from "react";
import TabItem from "../TabItem/TabItem";
import TabBatButton from "../TabBatButton/TabBatButton";
import TabBarContentZone from "../TabBarContentZone/TabBarContentZone";

const podsObject = {
    one: "Поход выходного дня",
    two: "Многодневный поход",
    three: "Мультипрограмма",
    four: "Детский поход",
    five: "Ваше предложение",
};

const TabBarProducts = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.bloc_tabs}>
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.one}
                    numberTab={1}
                />
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.two}
                    numberTab={2}
                />
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.three}
                    numberTab={3}
                />
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.four}
                    numberTab={4}
                />
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.five}
                    numberTab={5}
                />
            </div>

            <div className={Styles.content_tabs}>
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={1}
                    title={podsObject.one}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={2}
                    title={podsObject.two}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={3}
                    title={podsObject.three}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={4}
                    title={podsObject.four}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={5}
                    title={podsObject.five}
                />
            </div>
        </div>
    );
};
export default TabBarProducts;
