import styles from "../bannersection/banner.module.scss";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BannerSection = () => {
  return (
    <section className={styles.banerSection}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-12 col-12">
            <LeftBox />
          </div>
          <RightBox />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
