import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../usersFeedbackSection/usersFeedback.module.scss";
import userFeedback from "@/mockdata/userFeedbackMockdata";
import Image from "next/image";

const ScrollFeedback = () => {
  return (
    // <div className="container">
    <div className={styles.feedbackContainer}>
      {userFeedback.map((feedback, index) => (
        <div key={index} className={styles.feedbackCard}>
        <Image
          src="/images/feedbackCard/ratingStar.png"
          alt="feedbackRating"
          width={100}
          height={20}
        />

        <div className={styles.paragraph}>
          <p>{feedback.content}</p>
        </div>

        <div className={styles.btmText}>
          <div className={styles.profile}>
            <i className={feedback.profileImg} />
            <h6>{feedback.userName}</h6>
          </div>
          <p>{feedback.designation}</p>
        </div>
      </div>
      ))}
    </div>
    // </div>
  );
};

export default ScrollFeedback;
