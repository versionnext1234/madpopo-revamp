"use client";
import { useState, useEffect, useRef } from "react";
import TabsButton from "./TabsButton";
import TabContent from "./TabContent";
import styles from "./tabs.module.scss";
import CardSlider from "../common/slider/CardSlider";
import PriciningCard from "../common/card/PriciningCard";
import WordpressHostingCard from "../fetchdatacard/WordpressHostingCard";
import LinuxHostingCard from "../fetchdatacard/LinuxHostingCard";
import WindowsHoistingCard from "../fetchdatacard/WindowsHoistingCard";
import VirtualHoistingCard from "../fetchdatacard/VirtualHoistingCard";
import BusinessEmailCard from "../fetchdatacard/BusinessEmailCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab3");
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  const tabs = [
    {
      id: "tab1",
      label: "Windows Web Hosting",
      content: <WindowsHoistingCard />,
      fontClass: "fa-windows",
    },
    {
      id: "tab2",
      label: "Linux Web Hosting",
      content: <LinuxHostingCard />,
      fontClass: "fa-linux",
    },
    {
      id: "tab3",
      label: "WordPress Hosting",
      content: <WordpressHostingCard />,
      fontClass: "fa-wordpress",
    },
    {
      id: "tab4",
      label: "Virtual Dedicated Hosting",
      content: <VirtualHoistingCard />,
      fontClass: "fa-cloud-download",
    },
    {
      id: "tab5",
      label: "Business Email",
      content: <BusinessEmailCard />,
      fontClass: "fa-envelope",
    },
  ];

  // Scroll active tab into the center
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const containerWidth = tabsContainerRef.current.offsetWidth;
      const tabWidth = activeTabRef.current.offsetWidth;
      const tabOffset = activeTabRef.current.offsetLeft;

      const scrollPosition = tabOffset - containerWidth / 2 + tabWidth / 2;
      tabsContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeaders} ref={tabsContainerRef}>
        {tabs.map((tab) => (
          <TabsButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            ref={activeTab === tab.id ? activeTabRef : null}
            fontClass={tab.fontClass}
          />
        ))}
      </div>
      <TabContent content={tabs.find((tab) => tab.id === activeTab)?.content} />
    </div>
  );
};

export default Tabs;
