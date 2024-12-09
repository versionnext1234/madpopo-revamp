import Heading from "@/components/common/headingSection/heading";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import styles from "../usersFeedbackSection/usersFeedback.module.scss";
import FeedbackMarquee from "./FeedbackMarquee";
import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";
import ScrollFeedback from "./ScrollFeedback";

const UsersFeedback = () => {
  return (
    <div className={styles.feedbackWrap}>
      <div className="container">
        <Heading
          heading={
            <span>
              <i className="fas fa-heart" style={{ color: "red" }}></i> "Loved
              by experts"
            </span>
          }
        />
        <div className={styles.title}>
          <SectionTitle sectionTitle="See what our users say about us" />
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.feedbackMarquee}>
            <FeedbackMarquee direction="right" />
            <FeedbackMarquee direction="left" />
          </div>
          <div className={styles.scrollFeedback}>
            <ScrollFeedback />
          </div>

          <AnchorBtn
            btnStyle="solidBtn"
            buttonText="View More Reviews"
            anchorLink="#"
            icon=""
            btnWidth="16.8rem"
          />
        </div>
      </div>
    </div>
  );
};

export default UsersFeedback;
