import React from "react";
import styles from "../organizersection/org.module.scss";
import Link from "next/link";

const OrganizerSection = () => {
  return (
    <section className={styles.orgSection}>
      <div className="container"
      style={{marginTop:"45px"}}
      >
        <h3 className={styles.midText}>
          <span className={styles.wpImgWrap}>
            <img
              src="/images/banner/wordpress-icon.svg"
              alt="Organizer of WordCamp Asia 2024"
              width={20}
              height={20}
            />
          </span>
          specially {" "}
          <span className={styles.boldText}>  Organized For WordPress</span>
        </h3>
        <div className={styles.excelenceWrap}>
          <ul>
            <li>
              <span className={styles.boldTextSpan}>
                Excellent{" "}
                <img
                  src="/images/banner/stars.svg"
                  alt="Organizer of WordCamp Asia 2024"
                  width={110}
                  height={18}
                />
                <span className={styles.colorBoldText}>4.89</span>
                out of 5
              </span>
            </li>
            <li>
              <Link href="tel:+91 7039 003 001">
                <img
                  src="/images/banner/phn-icon.svg"
                  alt="Organizer of WordCamp Asia 2024"
                  width={20}
                  height={20}
                />
                +91 7039 003 001
              </Link>
            </li>
            <li>
              <Link href="">
                <img
                  src="/images/banner/chat-icon.svg"
                  alt="Organizer of WordCamp Asia 2024"
                  width={20}
                  height={20}
                />
                Chat with us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
