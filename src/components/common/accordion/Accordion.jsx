"use client";
import { useState } from "react";
import styles from "../accordion/accordion.module.scss";
import { homepageMockdata } from "@/mockdata/accordionMockdata";
import { useRef } from "react";

const Accordion = ({ data = homepageMockdata }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const questionRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleItemsVisibility = () => {
    if (visibleItems < data.length) {
      setVisibleItems((prevItems) => prevItems + 4);
    } else {
      setVisibleItems(4);
      if (questionRef.current) {
        questionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isShowingAll = visibleItems >= data.length;

  return (
    <div className={`container`}>
      <div className={`row`} ref={questionRef}>
        {data.slice(0, visibleItems).map((item, index) => (
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
                <div
                  className={`${styles.accordionIcon} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </div>
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

      <div className="text-center mt-3">
        <button className={styles.viewMoreBtn} onClick={toggleItemsVisibility}>
          {isShowingAll ? "View Less Reviews" : "View More Reviews"}
        </button>
      </div>
    </div>
  );
};

export default Accordion;
