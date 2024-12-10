import React from 'react'
import Paragraph from "@/components/common/paragraph/Paragraph";
import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import Tabs from "@/components/wordpresshosting/bannersection/tabs";
import styles from "../homepage/planstabs/plans.module.scss";

const wooSection3 = () => {
    return (
        <>
            <section className={styles.planSection}>
                <div className="container">
                    <SectionTitle sectionTitle="Reliable WooCommerce Hosting for Your Online StorePlan" />
                    <Paragraph paragraph="Get started risk-free with our 30-day money-back guarantee." />
                    <Tabs/>
                </div>
            </section>
        </>
    )
}
export default wooSection3