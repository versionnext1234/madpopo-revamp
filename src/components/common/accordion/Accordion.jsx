"use client";
import styles from "../accordion/accordion.module.scss";
import { useState } from "react";
import accordionData from "@/mockdata/accordionMockdata";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Only toggle the clicked accordion
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordions}>
      {accordionData.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.accordion} ${
            openIndex === index ? styles.open : ""
          }`}
        >
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span className={styles.accordionIcon}>
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
          {/* Render content conditionally to avoid unintended display */}
          <div
            className={`${styles.accordionContent} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
