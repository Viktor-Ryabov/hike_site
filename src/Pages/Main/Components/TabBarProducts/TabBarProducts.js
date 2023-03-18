import Styles from "./TabBarProducts.module.css";
import React from "react";
import { useState } from "react";
import TabBatButton from "../TabBatButton/TabBatButton";
import TabBarContentZone from "../TabBarContentZone/TabBarContentZone";
import { hikeOneDayArray, excursionsArray, climbingArray, questArray } from "../../../../constants/ConstantsBakItems.js";

const podsObject = {
    one: "Поход выходного дня",
    two: "Квест на природе",
    three: "Экскурсии",
    four: "Скалолазание",
    five: "Походы",
    six: "Детские походы",
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
                    // array={hikeArrayData(1)}
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
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.six}
                    numberTab={6}
                />
            </div>

            <div className={Styles.content_tabs}>
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={1}
                    title={podsObject.one}
                    data={hikeOneDayArray}

                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={2}
                    title={podsObject.two}
                    data={questArray}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={3}
                    title={podsObject.three}
                    data={excursionsArray}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={4}
                    title={podsObject.four}
                    data={climbingArray}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={5}
                    title={podsObject.five}
                    data={hikeOneDayArray}
                />
                <TabBarContentZone
                    toggleState={toggleState}
                    numerTab={6}
                    title={podsObject.six}
                    data={questArray}
                />
            </div>
        </div>
    );
};
export default TabBarProducts;
