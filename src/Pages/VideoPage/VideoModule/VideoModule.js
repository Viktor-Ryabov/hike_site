import Styles from "./VideoModule.module.css";

export const VideoModule = (props) => {
    return (
        <li className={Styles.videoModule}>
            <h3 className={Styles.titleVideo}>{props.title}</h3>
            <p className={Styles.dateVideo}>{props.date}</p>
            <video
                controls
                autoPlay={true}
                loop
                muted
                src={props.src}
                className={Styles.video}
                type="video/mp4"
            ></video>
        </li>
    );
};
