import React from 'react';
import styles from './wordpress.module.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

const BannerSection4 = () => {
    return (
        <>
            <div className={styles.bannersection4Main}>
                <div className={styles.bannersection4Mainheaders}>
                    Optimized Performance
                </div>
                <div className={styles.bannersection4Mainheaders2}>
                    <h2>Why Our WordPress Hosting Is the Best Choice</h2>
                </div>

                {/* Managed WordPress Hosting */}
                <div className="container"
                style={{marginTop:"20px"}}
                >
                    <div className={`row ${styles.managedwordpressboxmain}`}>
                        <div className={`col-md-6 ${styles.managedwordpressbox1}`}>
                         <img src='images\banner\advanced.png' alt="advanced photo"
                         className={styles.managedwordpressbox1img}
                         width={470}/>
                        </div>
                        <div className={`col-md-6 ${styles.managedwordpressbox2}`}>
                            <h2 className={styles.managedwordpressbox2head}>Managed WordPress Hosting</h2>
                            <div className={styles.managedwordpressbox2para}>
                                <p>Our managed WordPress hosting plans cater to WordPress users' needs, providing user-friendly features such as Popo Panel, a 1-click installer,
                                    and pre-installed performance plugins. Build a fast website and boost your
                                    online presence with ease.</p>
                            </div>
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                   <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Effortlessly test design updates on your website with our one-click staging tool.</p>
                                </div>   
                            </div>
                            {/* 2 */}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                   <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Stay protected around the clock with automatic WordPress updates..</p>
                                </div>   
                            </div>
                            {/* 3 */}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                   <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Keep your data safe with reliable automated backups..</p>
                                </div>   
                            </div>
                            {/*4*/}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                   <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Unlock a full development toolkit with WP-CLI, SSH access, Git integration, and PHP version management..</p>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSection4;
