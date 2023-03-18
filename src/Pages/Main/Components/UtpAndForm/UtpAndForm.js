import Styles from "./UtpAndForm.module.css";
import TopMenu from "../TopMenu/TopMenu.js";
import CaptureForm from "../CaptureForm/CaptureForm";

export const UtpAndForm = () => (
    <section className={Styles.capture}>
        <p className={Styles.utp}>
            Строительство домов в Крыму за 4 месяца без увеличения стоимости
            сметы.
        </p>
        <CaptureForm />
    </section>
);
