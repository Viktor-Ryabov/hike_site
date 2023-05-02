import Styles from "./Supack.module.css";
import Performance from "./Modules/Performance/Performance";
import Idea from "./Modules/Idea/Idea";
import Description from "./Modules/Description/Description";

const Supack = () => {
    return (
        <ul className={Styles.page}>
            <meta
                name="description"
                content="Питание и еда для походов, готовая еда, сушёная еда"
            />

            <Performance id="performance" />
            <Idea />
            <Description />

            {/* 
                <h2 className={Styles.places__title} id="placesTitle">
                    Чем перекусить на природе? SUPACK рекомендует!
                </h2>
                <section
                    aria-label="Продукты"
                    id="products"
                    className={Styles.places}
                ></section>

                */}
        </ul>
    );
};

export default Supack;
