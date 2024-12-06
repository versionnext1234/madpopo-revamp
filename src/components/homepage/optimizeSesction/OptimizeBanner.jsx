import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../../homepage/optimizeSesction/optimizePerformance.module.scss";
import featureData from "../../../mockdata/optimizeMockdata";

const OptimizeBanner = () => {
  return (
    <div className={styles.backgroundColor}>
      <div className={styles.wrapContainer}>
        <div className={styles.imageContainer}>
          <img src="images\optimizeBanner\optimizeBanner.svg" alt="optimize-banner" />
        </div>

        <div className={styles.featuresContainer}>
          {featureData.map((feature, index) => (
            <div className={styles.features} key={index}>
              <div className={styles.icon}>
                <i className={feature.icon} />
              </div>
              <h3>
                <b>{feature.boldText}</b> {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptimizeBanner;
