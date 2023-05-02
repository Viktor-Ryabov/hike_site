import Styles from "./TabBatButton.module.css";
import { Scrollchor } from "react-scrollchor";

const TabBatButton = (props) => {
    return (
        <Scrollchor  className={Styles.anchor}>
            <button
                className={`${
                    props.toggleState === props.numberTab
                        ? Styles.active_tabs + " " + Styles.tabs
                        : Styles.tabs
                }`}
                onClick={() => props.toggleTab(props.numberTab)}
            >
                <span>{props.text}</span>
            </button>
        </Scrollchor>
    );
};

export default TabBatButton;
