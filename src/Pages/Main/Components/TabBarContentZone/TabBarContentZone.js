import Styles from "./TabBarContentZone.module.css";
import GoodsZone from "../GoodsZone/GoodsZone";

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
                {/* <h2>{props.title}</h2> */}
                <hr />
                <GoodsZone
                    hikesArray={props.data}
                    setCardForModal={props.setCardForModal}
                    setModalActive={props.setModalActive}
                />
            </div>
        </>
    );
};

export default TabBarContentZone;
