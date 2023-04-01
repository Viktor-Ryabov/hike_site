import Styles from "./CardTour.module.css";

export const CardTour = (props) => {
    // console.log(props)
    return (
        <li
            className={Styles.list}
            onClick={() => {
                props.setCardForModal(props.item);
                props.setModalActive(true)
            }}
        >
            <article className={Styles.card}>
                <div className={Styles.card__rectangle}>
                    <img
                        className={Styles.card__foto}
                        src={props.item.image}
                        alt=""
                    />
                    <div className={Styles.card__discription}>
                        <h2 className={Styles.card__title}>
                            {props.item.name}
                        </h2>
                        <p className={Styles.card__text}>
                            {props.item.dificult}
                        </p>
                        <p className={Styles.card__text}>
                            {props.item.hikeLengthTitle} {props.item.hikeLength}
                        </p>
                        <p className={Styles.card__text}>
                            Стоимость: от {props.item.cost} руб.{" "}
                            {props.item.costTitle}
                        </p>
                        <div className={Styles.card__like_zone}></div>
                    </div>
                </div>
            </article>
        </li>
    );
};
