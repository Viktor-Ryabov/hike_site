import Styles from "./TabBarContentZone.module.css";

const TabBarContentZone = (props) => {
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
                <p>тут будет инфа про {props.title}</p>
            </div>
        </>
    );
};

export default TabBarContentZone;
