import Heading from "@/components/common/headingSection/heading";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import styles from "../freqaskQuestionSection/question.module.scss";
import Accordion from "@/components/common/accordion/Accordion";
import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";

const QuestionSection = () => { 
  return (
    <div className={styles.backgroundWrap}>
      <div className={styles.backgroundColor}>
        <div className="container">
          <Heading heading="Your Questions, Answered Clearly and Quickly" />
          <div className={styles.heading}>
            <SectionTitle sectionTitle="Frequently Asked questions" />
          </div>

          <div className={styles.contentWrapper}>
            <Accordion />
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
    </div>
  );
};

export default QuestionSection;
