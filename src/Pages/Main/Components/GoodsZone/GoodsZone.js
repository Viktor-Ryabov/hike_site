import { CardTour } from "../CardTour/CardTour.js";
import Styles from "./GoodsZone.module.css";

const GoodsZone = (props) => {
    const hikesArray = props.hikesArray;
    // console.log(hikesArray)
    return (
        <div className={Styles.goodsZone}>
            {hikesArray.map((hike) => (
                <CardTour item={hike} key={hike.id} id={hike.id} />
            ))}
            {/* <CardTour/> */}
        </div>
    );
};

export default GoodsZone;
