import styles from "../HoistingBannerSection/hoistingBanner.module.scss";

const HoistingCard4 = ({ heading, paragraph1 }) => {
  return (
    <div className={styles.cardBackground4}>
      <h3>{heading}</h3>
      <p>{paragraph1}</p>

      <img src="images\hoistingBanner\hoistingCard4.png" alt="" width={470} />
    </div>
  );
};

export default HoistingCard4;
