import React from 'react'
import Paragraph from "@/components/common/paragraph/Paragraph";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import WordpresshoistingTabs from "@/components/wordpresshosting/bannersection/WordpresshoistingTabs";
import styles from "../homepage/planstabs/plans.module.scss";

const cloudeSection2 = () => {
  return (
     <>
        <section className={styles.planSection}>
      <div className="container">
        <SectionTitle sectionTitle="Madpopo offers  Fast & Secure Cloud Servers for Business" />
        <Paragraph paragraph="Get started risk-free with our 30-day money-back guarantee." />
        <WordpresshoistingTabs />
      </div>
    </section>
     </>
  ) 
}
export default cloudeSection2;