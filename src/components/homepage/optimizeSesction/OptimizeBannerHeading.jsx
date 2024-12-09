import Heading from "@/components/common/headingSection/heading";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import styles from "../../homepage/optimizeSesction/optimizePerformance.module.scss";
import OptimizeBanner from "./OptimizeBanner";

const OptimizeBannerHeading = () => {
  return (
    <section className={styles.optimizeSection}>
      <div className="container">
        <Heading heading="Optimized Performance" />
        <div className={styles.headingSection}>
          <SectionTitle sectionTitle="Each Web Hosting plan comes with" />
        </div>

        <OptimizeBanner />
      </div>
    </section>
  );
};

export default OptimizeBannerHeading;
