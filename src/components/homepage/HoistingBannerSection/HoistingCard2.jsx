import styles from "../HoistingBannerSection/hoistingBanner.module.scss";

const HoistingCard2 = ({ heading, paragraph1, paragraph2 }) => {
  return (
    <div className={styles.hoistingCard2}>
      <div className={styles.cardBackground2}>
        <div className={styles.content}>
          <h3>{heading}</h3>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
        <div>
          <img
            src="images\hoistingBanner\hoistingCard2.svg"
            alt="hoistingCard2"
            width={355}
          />
        </div>
      </div>
    </div>
  );
};

export default HoistingCard2;
