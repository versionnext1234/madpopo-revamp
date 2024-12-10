"use client"
import WordpressHostingCard from '@/components/fetchdatacard/WordpressHostingCard';
import styles from './wordpress.module.scss';
const WordpresshoistingTabs = () => {
  return (
    <section>
      <h4 className={styles.WordpressHostingCardhead}>Hassle-Free Managed WordPress Hosting</h4>
      <WordpressHostingCard/>
    </section>
  );
};

export default WordpresshoistingTabs;
