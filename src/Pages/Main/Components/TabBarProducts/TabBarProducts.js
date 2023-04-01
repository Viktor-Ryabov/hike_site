import Modal from "../../../../Components/Modal/Modal/Modal.js"
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
    const [cardDataFormodal, setCardForModal] = useState({});
    const [modalActive, setModalActive] = useState(false);

    const setModalDisabled = () => {
        setModalActive(false);
    }

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const setCard = (card) => {
        setCardForModal(card);
        console.log(card)
    };

    const productsSwitcher = () => {
        switch (toggleState) {
            case 1:
                return hikeOneDayArray;
            case 2:
                return questArray;
            case 3:
                return excursionsArray;
            case 4:
                return climbingArray;
            case 5:
                return excursionsArray;
            case 6:
                return excursionsArray;
            default:
                return hikeOneDayArray;
        }
    };

    return (
        <section className={Styles.container}>
            <Modal active={modalActive} setModalDisabled={setModalDisabled} cardDataFormodal={cardDataFormodal}/>
            <h1 className={Styles.h1} id="products">
                Варианты активного отдыха:
            </h1>
            <div className={Styles.bloc_tabs}>
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.one}
                    numberTab={1}
                />
                {/* <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.two}
                    numberTab={2}
                /> */}
                {/* <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.three}
                    numberTab={3}
                /> */}
                <TabBatButton
                    toggleState={toggleState}
                    toggleTab={toggleTab}
                    text={podsObject.four}
                    numberTab={4}
                />
                {/* <TabBatButton
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
                /> */}
            </div>

            {/* <div className={Styles.content_tabs}> */}
            <TabBarContentZone
                toggleState={toggleState}
                numerTab={toggleState}
                data={productsSwitcher()}
                setCardForModal={setCard}
                setModalActive={setModalActive}
            />
        </section>
    );
};
export default TabBarProducts;
