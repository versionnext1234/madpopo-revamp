import Image from "next/image";
import styles from "../HoistingBannerSection/hoistingBanner.module.scss";

const HoistingCard1 = ({ heading }) => {
  return (
    <div className={styles.hoistingCards}>
      <div className={styles.cardBackground1}>
        <h3>{heading}</h3>
        <div className={styles.mobImgWrap}>
          <Image
            src="/images/hoistingBanner/hoistingCrad1.png"
            alt="hoistingCrad1"
            width={1300}
            height={1200}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HoistingCard1;
