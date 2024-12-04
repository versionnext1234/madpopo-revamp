"use client";
import styles from "../HoistingBannerSection/hoistingBanner.module.scss";
import { useState } from "react";

const HoistingCard3 = ({ heading, paragraph1, paragraph2 }) => {
  return (
    <div className={styles.cardBackground3}>
      <div className={styles.content}>
        <h3>{heading}</h3>
        <p>{paragraph1}</p>
      </div>

      <div className={styles.ratingContent}>
        <div className={styles.ratingStar}>
          <h1>4.9</h1>
          <img src="images\hoistingBanner\star.svg" alt="rating-star" />
        </div>

        <div className={styles.para2}>
          <p>{paragraph2}</p>
        </div>

        <div className={styles.avatarContainer}>
          <div className={styles["avatar-container-item"]}>
            <img
              src="images\hoistingBanner\dummuProfileImg.png"
              alt="Avatar 1"
            />
          </div>
          <div className={styles["avatar-container-item"]}>
            <img
              src="images\hoistingBanner\dummyProfielImg2.svg"
              alt="Avatar 2"
            />
          </div>
          <div className={styles["avatar-container-item"]}>
            <img
              src="images\hoistingBanner\dummuProfileImg.png"
              alt="Avatar 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoistingCard3;
