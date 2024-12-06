import styles from "../../common/profile/profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles["avatar-container-item"]}>
        <img src="images\hoistingBanner\dummuProfileImg.png" alt="Avatar 1" />
      </div>
      <div className={styles["avatar-container-item"]}>
        <img src="images\hoistingBanner\dummyProfielImg2.svg" alt="Avatar 2" />
      </div>
      <div className={styles["avatar-container-item"]}>
        <img src="images\hoistingBanner\dummuProfileImg.png" alt="Avatar 3" />
      </div>
    </div>
  );
};

export default Profile;
