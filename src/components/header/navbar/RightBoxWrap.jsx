import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";
import styles from "../header.module.scss";
import Link from "next/link";
import React from "react";

const RightBoxWrap = () => {
  return (
    <div className={styles.rightWrap}>
      <AnchorBtn
        btnStyle="transparentBtn"
        buttonText="login"
        anchorLink="#"
        icon="fa fa-user-o"
        btnWidth="11rem"
      />
      <div className={styles.phnNumWrap}>
        <Link href="tel:+91 7039 003 001">+91 7039 003 001</Link>
        <span>(24x7 Sales)</span>
      </div>
    </div>
  );
};

export default RightBoxWrap;
