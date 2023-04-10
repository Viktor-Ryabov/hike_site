import Styles from "./Supack.module.css";
import Performance from "./Modules/Performance/Performance";
import Idea from "./Modules/Idea/Idea";

const Supack = () => {
    return (
        <ul className={Styles.page}>

                <Performance id="performance" />
                <Idea />
                   
               
{/* 
                <h2 className={Styles.places__title} id="placesTitle">
                    Чем перекусить на природе? SUPACK рекомендует!
                </h2>
                <section
                    aria-label="Продукты"
                    id="products"
                    className={Styles.places}
                ></section>

                <section className={Styles.studyComposition} id="studyComposition">
                    <p className={Styles.studyComposition__blockName}>Отличия</p>
                    <h3 className={Styles.studyComposition__title}>
                        Питание на природе может быть полноценным, а так же
                        вкусным и полезным
                    </h3>
                    <img
                        src="./images/supack-1pack.jpeg"
                        alt="дорога в лесу"
                        className={Styles.studyComposition__foto}
                    />
                    <p className={Styles.studyComposition__text}>
                        Экологичные рецепты на основе круп, овощей, специй и
                        мяса (опционально).
                    </p>
                    <p className={Styles.studyComposition__text_2}>
                        Можно сделать как отдельные блюда, так и полноценную
                        систему питания (раскладку) на несколько дней. Блюда при
                        этом практически не будут повторяться.
                    </p>
                    <button className={Styles.studyComposition__button}>
                        Узнать как это?
                    </button>
                    <ul className={Styles.studyComposition__rules}>
                        <li className={Styles.studyComposition__compositionRule}>
                            Вес упакованых блюд меньше аналогов, так как овощи и
                            мясо высушены.
                        </li>
                        <li className={Styles.studyComposition__compositionRule}>
                            Простота: открыл пакет, высыпал в воду, сварил,
                            готово!
                        </li>
                        <li className={Styles.studyComposition__compositionRule}>
                            Рецепты очень вкусные и не содержат консервантов и
                            усилителей вкуса!
                        </li>
                        <li className={Styles.studyComposition__compositionRule}>
                            Полноценные продукты лучше сублиматов и продуктов
                            быстрого приготовления
                        </li>
                    </ul>
                </section> */}

        </ul>
    );
};

export default Supack;
