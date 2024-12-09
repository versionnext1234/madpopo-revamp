"use client";
import styles from "../domainSection/domain.module.scss";
import SearchContainer from "./SearchContainer";
import DomainPrice from "./DomainPrice";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import { useState } from "react";

const Domain = () => {
    const [currency, setCurrency] = useState("");

  return (
    <div className="container">
      <div className={styles.backgroundWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <SectionTitle sectionTitle="Domain name search – buy a domain in minutes"
            className={styles.title}
            />
            <p>
              It’s easy – simply enter your desired domain name and instantly
              check its availability. Register it before someone else will.
            </p>
          </div>

          <SearchContainer currency={currency} />

          <DomainPrice setCurrency={setCurrency}/>

          <div className={styles.transferLink}>
            <p>
              Already have a domain? <a href="#">Transfer it</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
