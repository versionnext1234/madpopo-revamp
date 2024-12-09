"use client"
import WordpressHostingCard from '@/components/fetchdatacard/WordpressHostingCard';
import styles from './wordpress.module.scss'
import { useState } from "react";

const Tabs = () => {
  return (
    <section>
      <h4 className={styles.WordpressHostingCardhead}>Hassle-Free Managed WordPress Hosting</h4>
      <WordpressHostingCard/>
    </section>
  );
};

export default Tabs;
