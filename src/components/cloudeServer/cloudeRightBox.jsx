import React from "react";
import Image from "next/image";
import styles from "./cloude.module.scss";

const CloudeRightBox = () => {
  return ( 
    <div className={styles.rightBox}>
      <Image
        src="/images/banner/cloudeServerright.png"
        alt="Banner Madpopo"
        width={755}
        height={633}
      />
    </div>
  );
};

export default CloudeRightBox;
