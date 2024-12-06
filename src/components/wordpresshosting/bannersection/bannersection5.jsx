import React from 'react'
import styles from './wordpress.module.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

const bannersection5 = () => {
    return (
        <>
            <div className={styles.bannersection4Main}
                style={{ marginTop: "40px" }}
            >
                <div className={styles.bannersection4Mainheaders}>
                    Seamless Hosting Experience
                </div>
                <div className={styles.bannersection4Mainheaders2}>
                    <h2>All WordPress Hosting Plans Include</h2>
                </div>
                <div className={styles.bannersection5Mainheaders}>
                    <p>Features Included in All WordPress Hosting Plans</p>
                </div>
                {/* main rotate left to right  */}
                <div className='container'>
                    <div className={`row ${styles.section5rotatecertificatemain}`}>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                SSL Certificate
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                Access Management
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                Page Speed Cache Module
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                PHP Version Control
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            1<div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                eCommerce Optimization
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                1-Click WordPress Installation
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                WP-CLI and SSH Access
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                WP-CLI and SSH Access
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                Free Migration
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                24/7 Customer Support
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                Git Integration
                            </div>
                        </div>
                        <div className={`col-md-2 ${styles.section5rotatecertificate}`}>
                            <div>
                                <img src="images\banner\checkmark 1.svg" alt="" />
                            </div>
                            <div>
                                Regular Backups
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bannersection5