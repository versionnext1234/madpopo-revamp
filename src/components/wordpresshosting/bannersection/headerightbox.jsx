import React from 'react'
import Image from "next/image";
import styles from "../../homepage/bannersection/banner.module.scss";

const headerightbox = () => {
    return (
        <>
            <div className={styles.rightBoxx}>
                <Image
                    src="/images/banner/wordpressshosting.png"
                    alt="Banner Madpopo"
                    width={755}
                    height={633}
                />
            </div>
        </>
    )
}

export default headerightbox