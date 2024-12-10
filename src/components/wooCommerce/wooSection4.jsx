import React from 'react'
import styles from '../wordpresshosting/bannersection/wordpress.module.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

const wooSection4 = () => {
    return (
        <>
            <div className={styles.bannersection4Main}>
                <div className={styles.bannersection4Mainheaders}>
                    Optimized Performance
                </div>
                <div className={styles.bannersection4Mainheaders2}>
                    <h2>Why Our WooCommerce Hosting Is the Best Choice</h2>
                </div>

                {/* Managed WordPress Hosting */}
                <div className="container"
                    style={{ marginTop: "20px" }}
                >
                    <div className={`row ${styles.managedwordpressboxmain}`}
                  
                    >
                        <div className={`col-xl-6 col-md-12 ${styles.managedwordpressbox1}`}
                        
                        >
                            <img src='images\banner\wooimg.png' alt="advanced photo"
                                className={styles.managedwordpressbox1img}
                                width={470} />
                        </div>

                        <div className={`col-xl-6 col-md-12 ${styles.managedwordpressbox2}`}
                          style={{ marginTop: "40px"}}
                        
                        >
                            <h2 className={styles.managedwordpressbox2head}> Get Started Fast, Grow with Ease</h2>
                            <div className={styles.managedwordpressbox2para}>
                                <p>Skip the complex setup process and get straight to business.</p>
                            </div>

                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                    <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Secure a free domain for your brand.</p>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                    <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Install WooCommerce in one click and start building your store.</p>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                    <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Boost conversions with AI-generated product descriptions.</p>
                                </div>
                            </div>
                            {/*4*/}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                    <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Enjoy high uptime and performance, thanks to stable and secure cloud servers.</p>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className={styles.managedwordpressbox2correcticon}>
                                <div>
                                    <img src="images\banner\Vector.svg" alt="" />
                                </div>
                                <div>
                                    <p>Sell hundreds of products globally..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default wooSection4