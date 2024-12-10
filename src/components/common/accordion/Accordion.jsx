"use client";
import { useState } from "react";
import styles from "../accordion/accordion.module.scss";
import accordionData from "@/mockdata/accordionMockdata";


const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMoreItems = () => {
   
    setVisibleItems((prevItems) => prevItems + 4);
  };

  const shouldShowMoreButton = visibleItems < accordionData.length;

  return (
    <div className={`container`}>
      <div className={`row`}>
        {accordionData.slice(0, visibleItems).map((item, index) => (
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


      {shouldShowMoreButton && (
        <div className="text-center mt-3">
          <button
            className={styles.viewMoreBtn} 
            onClick={showMoreItems}
          >
            View More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
