import Styles from "./CardTour.module.css";

export const CardTour = (props) => {
    return (
        <>
            {/* <div className={Styles.cardTour}>{props}</div> */}

            <article className={Styles.card}>
                <div className={Styles.card__rectangle}>
                    <button
                        aria-label="кнопка удаления карточки"
                        className={Styles.card__delete_button}
                    ></button>
                    <img className={Styles.card__foto} src="#" alt="" />
                    <div className={Styles.card__name_like}>
                        <h2 className={Styles.card__title}></h2>
                        <div className={Styles.card__like_zone}>
                            <button
                                className={Styles.card__button_like}
                            ></button>
                            <p
                                className={Styles.card__number_of_likes}
                            ></p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

