import Styles from "./VideoModule.module.css";

export const VideoModule = (props) => {
    return (
        <li className={Styles.videoModule}>
            <h3 className={Styles.titleVideo}>{props.title}</h3>
            <p className={Styles.dateVideo}>{props.date}</p>
            <iframe
                src={props.src + "?autoplay=0"}
                frameborder="0"
                allowfullscreen
                className={Styles.video}
            ></iframe>
        </li>
    );
};

// <li className={Styles.videoModule}>
//     <h3 className={Styles.titleVideo}>{props.title}</h3>
//     <p className={Styles.dateVideo}>{props.date}</p>
//     <video
//         controls
//         autoPlay={false}
//         loop
//         muted
//         src={props.src}
//         className={Styles.video}
//         type="video/mp4"
//     ></video>
// </li>
