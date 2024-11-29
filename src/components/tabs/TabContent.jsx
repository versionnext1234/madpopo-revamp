import styles from "./tabContent.module.scss";

const TabContent = ({ content }) => {
  return <div className={`${styles.tabContent} midClass`}>{content}</div>;
};

export default TabContent;
