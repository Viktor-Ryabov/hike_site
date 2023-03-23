import Styles from "./About.module.css";
import Person from "./Components/Person/Person";

import {persons} from "./constants/constantsPersons.js"



const About = () => {
    return (
        <section className={Styles.page}>
            <Person props={persons.Natali} />
            <Person props={persons.Vika} />
            <Person props={persons.Varan} />
        </section>
    );
};

export default About;
