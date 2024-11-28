import Paragraph from "@/components/common/paragraph/Paragraph";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import Tabs from "@/components/tabs/Tabs";
import styles from "../planstabs/plans.module.scss";

const PlansSection = () => {
  return (
    <section className={styles.planSection}>
      <div className="container">
        <SectionTitle sectionTitle="Find the Plan That Fits You Best" />
        <Paragraph paragraph="Get started risk-free with our 30-day money-back guarantee." />
        <Tabs />
      </div>
    </section>
  );
};

export default PlansSection;
