import React from "react";
import styles from "./tabButton.module.scss";

const TabsButton = ({ label, isActive, onClick, fontClass }) => {
  return (
    <div
      className={`${styles.tabItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span>
        <i className={`fa ${fontClass}`}></i>
      </span>
      {label}
    </div>
  );
};

export default TabsButton;
