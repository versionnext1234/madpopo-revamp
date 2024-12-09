import React from "react";
import Image from "next/image";
import styles from "../bannersection/banner.module.scss";
const RightBox = () => {
  return ( 
    <div className={styles.rightBox}>
      <Image
        src="/images/banner/home-banner-image.svg"
        alt="Banner Madpopo"
        width={755}
        height={633}
      />
    </div>
  );
};

export default RightBox;
