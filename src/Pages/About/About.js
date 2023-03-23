import Styles from "./About.module.css";
import FotoAbout from "./Modules/FotoAbout/FotoAbout";
import FotoNata from "../../Images/Nata.jpg"
import ArticleAbout from "./Modules/ArticleAbout/ArticleAbout";

const About = () => {
  return (
    <section className={Styles.page}>
        <FotoAbout image={FotoNata} />
        <ArticleAbout />
    </section>
    )
}

export default About
