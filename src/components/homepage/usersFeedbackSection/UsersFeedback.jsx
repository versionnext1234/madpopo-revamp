import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import styles from "../usersFeedbackSection/usersFeedback.module.scss";
import FeedbackScroller from "./FeedbackScroller";
import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";

const UsersFeedback = () => {
  return (
    <div className={styles.feedbackWrap}>
      <div className="container">
        <div className={styles.heading}>
          <p>Seamless Hosting Experience</p>
        </div>
        <div className={styles.title}>
          <SectionTitle sectionTitle="See what our users say about us" />
        </div>

        <div className={styles.feedbackScroller}>
          <FeedbackScroller direction="right" />

          <FeedbackScroller direction="left" />

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
