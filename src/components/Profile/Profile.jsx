import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
          width="800px" height="300px">
        </img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;