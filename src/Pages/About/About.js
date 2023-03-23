import Styles from "./About.module.css";
import Person from "./Components/Person/Person";
import fotoNata from "../../Images/Nata.jpg";
import fotoVika from "../../Images/foroVika.jpg";
import fotoVaran from "../../Images/Varan.jpg";

const Natali = {
    text: "Я Наталья и я альпинист. Ля-ля. А еще на фото у меня ступни в однусторону смотрят - на перевал.",
    image: fotoNata,
    name: "Наталья Рябова",
};
const Vika = {
    text: "Я Виктор и я альпинист. Ля-ля",
    image: fotoVika,
    name: "Виктор Рябов",
};
const Varan = {
    text: "Я Варюня и я тоже альпинист. Ля-ля",
    image: fotoVaran,
    name: "Варечка Рябова",
};

const About = () => {
    return (
        <section className={Styles.page}>
            <Person props={Natali} />
            <Person props={Vika} />
            <Person props={Varan} />
        </section>
    );
};

export default About;
