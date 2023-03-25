import Styles from "./TabBarProducts.module.css";
import React from "react";
import { useState } from "react";
import TabBatButton from "../TabBatButton/TabBatButton";
import TabBarContentZone from "../TabBarContentZone/TabBarContentZone";
import {
    hikeOneDayArray,
    excursionsArray,
    climbingArray,
    questArray,
} from "../../../../constants/constantsBakItems.js";


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

    const productsSwitcher = () => {
        switch (toggleState) {
            case 0:
                return [];
                break;
            case 1:
                return hikeOneDayArray;
                break;
            case 2:
                return questArray;
                break;
            case 3:
                return excursionsArray;
                break;
            case 4:
                return climbingArray;
                break;
            case 5:
                return excursionsArray;
                break;
            case 6:
                return excursionsArray;
                break;
        }
    };

    return (
        <section className={Styles.container} >
            <h1 className={Styles.h1} id="products">Чем предлагаем заняться:</h1>
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
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.six}
                    numberTab={6}
                />
            </div>

            {/* <div className={Styles.content_tabs}> */}
            <TabBarContentZone
                toggleState={toggleState}
                numerTab={toggleState}
                data={productsSwitcher()}
            />
        </section>
    );
};
export default TabBarProducts;
