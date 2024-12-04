import styles from "../HoistingBannerSection/hoistingBanner.module.scss";

const HoistingCard1 = ({ heading }) => {
  return (
    <div className={styles.hoistingCards}>
      <div className={styles.cardBackground1}>
        <h3>{heading}</h3>
        <img src="images\hoistingBanner\hoistingCrad1.png" alt="hoistingCrad1"
        width={320}/>
      </div>
    </div>
  );
};

export default HoistingCard1;
