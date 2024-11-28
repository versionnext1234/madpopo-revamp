import CountrySelector from "@/components/common/countryselection/CountrySelector";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../header.module.scss";

const LeftBoxWrap = () => {
  return (
    <div className={styles.leftWrap}>
      <Link className="navbar-brand" href="/">
        <Image
          src="/images/header/madpopo-dark-logo.svg"
          alt="MadPopo dark logo"
          className="dark-version-logo"
          width={110}
          height={51}
        />
      </Link>
      <CountrySelector />
    </div>
  );
};

export default LeftBoxWrap;
