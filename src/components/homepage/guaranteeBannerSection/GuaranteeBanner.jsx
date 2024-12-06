import Profile from "@/components/common/profile/profile";
import styles from "../guaranteeBannerSection/guaranteeBanner.module.scss";

const GuaranteeBanner = () => {
  return (
    <div className={styles.backgroundColor}>
      <div className="container">
        <div className={styles.bannerWrapper}>
          <div className={styles.imageContainer}>
            <img
              src="images\guaranteeBanner\guaranteeBannerImg.png"
              alt="guaranteeBanner"
              width={500}
            />
          </div>
          <div className={styles.content}>
            <h3>30-day money back guarantee</h3>
            <p>
              Fully explore the features, performance, and assess our customer
              support. If we do not meet your expectations, ask for a refund &
              we will process it promptly with no questions asked.
            </p>

            <div className={styles.profileContainer}>
              <div className={styles.profileComp}>
                <Profile />
                <div className={styles.profileContent}>
                  <div className={styles.heading}>
                    <h6>232k</h6>
                  </div>
                  <div className={styles.paragraph}>
                    <p>Active Users</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="images\guaranteeBanner\guaranteeImg2.png"
                  alt="guaranteeImg2"
                  width={200}
                //   className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeBanner;
