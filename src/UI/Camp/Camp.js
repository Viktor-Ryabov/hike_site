import Styles from "./Camp.module.css";

export const Camp = () => {
    return (
        <div className = {Styles.container}>
            <h1 className={Styles.h1}>Природа ждет нас.......</h1>
            <div className = {Styles.campfire_wrapper}>
                <div className = {Styles.tree_container_back}>
                    <div className = {Styles.tree_8}></div>
                    <div className = {Styles.tree_9}></div>
                    <div className = {Styles.tree_10}></div>
                </div>
                <div className = {Styles.rock_container}>
                    <div className = {Styles.rock_big}></div>
                    <div className = {Styles.rock_small}>
                        <div className = {Styles.rock_1}></div>
                        <div className = {Styles.rock_2}></div>
                        <div className = {Styles.rock_3}></div>
                        <div className = {Styles.rock_4}></div>
                    </div>
                </div>
                <div className = {Styles.smoke_container}>
                    <svg>
                        <path d="M 150 0 Q 200 200 100 250 C 0 450 120 400 50 600" />
                    </svg>
                    <div className = {Styles.fire_container}>
                        <div className = {Styles.flame_1}></div>
                        <div className = {Styles.flame_2}></div>
                        <div className = {Styles.flame_3}></div>
                    </div>
                </div>
                <div className = {Styles.tree_container_front}>
                    <div className = {Styles.tree_1}></div>
                    <div className = {Styles.tree_2}></div>
                    <div className = {Styles.tree_3}></div>
                    <div className = {Styles.tree_4}></div>
                    <div className = {Styles.tree_5}></div>
                    <div className = {Styles.tree_6}></div>
                    <div className = {Styles.tree_7}></div>
                </div>
            </div>
        </div>
    );
};
