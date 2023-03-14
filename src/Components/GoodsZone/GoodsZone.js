import { CardTour } from "../CardTour/CardTour";
import Styles from "./GoodsZone.module.css";

const GoodsZone = () => {
    return (
    <div className={Styles.goodsZone}>
        <CardTour/>
        <CardTour/>
        <CardTour/>
        <CardTour/>
        <CardTour/>
        <CardTour/>
        <CardTour/>
    </div>
    )
};

export default GoodsZone;
