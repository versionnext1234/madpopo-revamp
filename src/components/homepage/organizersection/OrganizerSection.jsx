import React from "react";
import styles from "../organizersection/org.module.scss";
import Link from "next/link";

const OrganizerSection = () => {
  return (
    <section className={styles.orgSection}>
      <div className="container">
        <h3 className={styles.midText}>
          <span className={styles.wpImgWrap}>
            <img
              src="/images/banner/wordpress-icon.svg"
              alt="Organizer of WordCamp Asia 2024"
              width={20}
              height={20}
            />
          </span>
          Organizer of{" "}
          <span className={styles.boldText}> WordCamp Asia 2024</span>
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
      <table>
        <thead>
            <tr>
                <th rowSpan="2">Sr. No</th>
                <th rowSpan="2">ISPL ID</th>
                <th rowSpan="2">Role</th>
                <th colSpan="2" class="header-group">Batting Performance</th>
                <th colSpan="4" class="header-group">Bowling Performance</th>
                <th rowSpan="2">Total Rating</th>
                <th rowSpan="2">Blue Ticket Holder</th>
                <th rowSpan="2">Performance Video Link</th>
            </tr>
            <tr>
                <th>Ball Taken</th>
                <th>Runs Scored</th>
                <th>Over</th>
                <th>Runs Conceded</th>
                <th>Wickets Taken</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>12345</td>
                <td>Batsman</td>
                <td>30</td>
                <td>50</td>
                <td>5</td>
                <td>25</td>
                <td>2</td>
                <td>8.5</td>
                <td>No</td>
                <td><a href="https://example.com/video">View</a></td>
            </tr>
        </tbody>
    </table>
    </section>
  );
};

export default OrganizerSection;
