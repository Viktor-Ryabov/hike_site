import Styles from "./TabBatButton.module.css";

const TabBatButton = (props) => {
    return (
        <button
            className={`${
                props.toggleState === props.numberTab
                    ? Styles.active_tabs 
                    : Styles.tabs
            }`}
            onClick={() => props.toggleTab(props.numberTab)}
        >
            <span>{props.text}</span>
        </button>
    );
};

export default TabBatButton;
