import Link from "next/link";
import React from "react";
import styles from "../anchorbutton/anchorBtn.module.scss";

const AnchorBtn = ({ buttonText, anchorLink, btnStyle, icon, btnWidth, borderRadius, height }) => {
  return (
    <Link
      href={anchorLink}
      passHref
      className={`${styles.commonBtn} ${styles[btnStyle]}`}
      style={{ width: btnWidth, borderRadius: borderRadius, height: height }}
    >
      <span>
        <i className={icon}></i>
      </span>
      {buttonText}
    </Link>
  );
};

export default AnchorBtn;
