import Styles from "./TabBarContentZone.module.css";
import GoodsZone from "../GoodsZone/GoodsZone";
import { hikeOneDayArray } from "../../constants/ConstantsBakItems";

const TabBarContentZone = (props) => {
    // console.log(`TabBarContentZone: ${props}`);
    return (
        <>
            <div
                className={
                    props.toggleState === props.numerTab
                        ? Styles.content + Styles.active_content
                        : Styles.content
                }
            >
                <h2>{props.title}</h2>
                <hr />
                <GoodsZone hikesArray={props.data}/>
            </div>
        </>
    );
};

export default TabBarContentZone;
