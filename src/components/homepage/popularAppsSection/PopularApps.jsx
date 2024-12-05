import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";
import styles from "../popularAppsSection/popularApps.module.scss";

const PopularApps = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className="container">
        <div className={styles.heading}>
          <h3>Popular apps you love, Optimized for full performance</h3>
          <p>
            Experience effortless success with your favorite applications. Our
            cloud hosting service ensures a smooth setup—just click, configure,
            and you're ready to go
          </p>
          <AnchorBtn
            btnStyle="solidBtn"
            buttonText="Start Hosting Now"
            anchorLink="#"
            icon=""
            btnWidth="16.8rem"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularApps;
