import Image from "next/image";
import styles from "../HoistingBannerSection/hoistingBanner.module.scss";

const HoistingCard4 = ({ heading, paragraph1 }) => {
  return (
    <div className={styles.cardBackground4}>
      <h3>{heading}</h3>
      <p>{paragraph1}</p>

      <Image
        src="/images/hoistingBanner/hoistingCard4.png"
        alt="hoistingCard4"
        width={1300}
        height={1200}
        className="img-fluid"
      />
    </div>
  );
};

export default HoistingCard4;
