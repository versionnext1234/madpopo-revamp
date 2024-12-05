"use client";
import styles from "../accordion/accordion.module.scss";
import { useState } from "react";
import accordionData from "@/mockdata/accordionMockdata";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
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
            className={styles.accordion__header}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span className={styles.accordion__icon}>
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <div className={styles.accordion__content}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
