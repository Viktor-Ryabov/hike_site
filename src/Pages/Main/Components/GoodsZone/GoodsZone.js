import { CardTour } from "../CardTour/CardTour.js";
import Styles from "./GoodsZone.module.css";

const GoodsZone = (props) => {
    const hikesArray = props.hikesArray;
    return (
        <ul className={Styles.goodsZone}>
            {hikesArray.map((hike) => (
                <CardTour
                    item={hike}
                    key={hike.id}
                    id={hike.id}
                    setCardForModal={props.setCardForModal}
                    setModalActive={props.setModalActive}
                />
            ))}
            {/* <CardTour/> */}
        </ul>
    );
};

export default GoodsZone;
