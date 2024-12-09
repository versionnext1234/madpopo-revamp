"use client";
import { useState } from "react";
import styles from "../accordion/accordion.module.scss";
import accordionData from "@/mockdata/accordionMockdata";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`container`}>
      <div className={`row`}>
        {accordionData.map((item, index) => (
          <div className="col-md-6 mb-3" key={item.id}>
            <div
              className={`${styles.accordion} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <span
                  className={`${styles.accordionIcon} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`${styles.accordionContent} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
