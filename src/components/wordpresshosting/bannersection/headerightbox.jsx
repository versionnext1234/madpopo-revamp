import React from 'react'
import Image from "next/image";
import styles from "../../homepage/bannersection/banner.module.scss";

const headerightbox = () => {
    return (
        <>
            <div className={styles.rightBoxx}>
                <img
                    className={styles.rightBoxximg}
                    src="/images/banner/wordpressshosting.png"
                    alt="Banner Madpopo"
                />
            </div>
        </>
    )
}

export default headerightbox