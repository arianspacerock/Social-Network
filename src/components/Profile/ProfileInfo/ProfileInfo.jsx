import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
                     width="800px" height="300px">
                </img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
