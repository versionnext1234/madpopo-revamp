import React from "react";
import styles from "../topsection/topbar.module.scss";
const TopBar = () => {
  return (
    <section className={styles.topSection}>
      <p>
        Get Upto <b>80% OFF</b> on Premium <b>Web Hosting!</b> Deal ends in{" "}
        <b>01 : 52 : 54</b>
      </p>
    </section>
  );
};

export default TopBar;
