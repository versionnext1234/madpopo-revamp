import Image from "next/image";
import styles from "../HoistingBannerSection/hoistingBanner.module.scss";

const HoistingCard2 = ({ heading, paragraph1, paragraph2 }) => {
  return (
    <div className={styles.cardBackground2}>
      <div className={styles.content}>
        <h3>{heading}</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
      <Image
        src="/images/hoistingBanner/hoistingCard2.svg"
        alt="hoistingCard2"
        width={1800}
        height={1250}
        className="img-fluid"
      />
    </div>
  );
};

export default HoistingCard2;
