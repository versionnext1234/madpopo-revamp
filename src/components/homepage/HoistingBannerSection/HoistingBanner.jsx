import styles from "../HoistingBannerSection/hoistingBanner.module.scss";
import Heading from "@/components/common/headingSection/heading";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import HoistingCard1 from "./HoistingCard1";
import HoistingCard2 from "./HoistingCard2";
import HoistingCard3 from "./HoistingCard3";
import HoistingCard4 from "./HoistingCard4";

const HoistingBanner = () => {
  return (
    <section className={styles.hoistingSection}>
      <div className="container">
        <Heading heading="Seamless Hosting Experience" />
        <div className={styles.headingSection}>
          <SectionTitle sectionTitle="What You Get with Each Hosting Plan" />
        </div>

        <div className={styles.parent}>
          <div className={styles.div1}>
            <HoistingCard1 heading="Reliable web hosting with 99.9% uptime" />
          </div>
          <div className={styles.div2}>
            <HoistingCard2
              heading="Speed. Security. Assurance."
              paragraph1="Web hosting provides everything you need to get your idea online. From where your website lives in the digital world, to where your files and data are securely stored – find and manage it all in one place."
              paragraph2="Optimized for speed, security and reliability, we’re trusted by over 3 million website owners worldwide."
            />
          </div>
          <div className={styles.div3}>
            <HoistingCard3
              heading="Get support from our hosting experts. 24/7"
              paragraph1="Fully explore the features, performance, and assess our customer support. If we do not meet your expectations, ask for a refund & we will process it promptly with no questions asked."
              paragraph2="Simple setup and outstanding service; we couldn't be happier!"
            />
          </div>
          <div className={styles.div4}>
            <HoistingCard4
              heading="See everything. Control everything."
              paragraph1="Easy to Use Dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoistingBanner;
