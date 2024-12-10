import React from 'react'
import styles from './wordpress.module.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Marquee from 'react-fast-marquee';

const bannersection5 = () => {
    const features = [
        { text: "SSL Certificate", img: "images/banner/checkmark 1.svg" },
        { text: "Access Management", img: "images/banner/checkmark 1.svg" },
        { text: "Page Speed Cache Module", img: "images/banner/checkmark 1.svg" },
        { text: "PHP Version Control", img: "images/banner/checkmark 1.svg" },
        { text: "eCommerce Optimization", img: "images/banner/checkmark 1.svg" },
        { text: "1-Click WordPress Installation", img: "images/banner/checkmark 1.svg" },
        { text: "WP-CLI and SSH Access", img: "images/banner/checkmark 1.svg" },
        { text: "Free Migration", img: "images/banner/checkmark 1.svg" },
        { text: "24/7 Customer Support", img: "images/banner/checkmark 1.svg" },
        { text: "Git Integration", img: "images/banner/checkmark 1.svg" },
        { text: "Regular Backups", img: "images/banner/checkmark 1.svg" },
    ]; 
    const firstHalf = features.slice(0, 6);
    const secondHalf = features.slice(0, 6);
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
                <div className={`${styles.blurleftsideimg}`}>
                    <img
                        className={styles.blurleftsideimgmain}
                        src="images\banner\whiteblur.png" alt="" />                    
                      <img
                        className={styles.blurleftsideimgmainright}
                        src="images\banner\whiteblurright.png" alt="" />
                    <Marquee
                        pauseOnHover gradient={false} speed={50} direction="right">
                        <div
                            className={`row ${styles.section5rotatecertificatemain}`}>
                            {firstHalf.map((item, index) => (
                                <div key={index} className={`col-md-2 ${styles.section5rotatecertificate}`}>
                                    <div>
                                        <img src={item.img} alt={item.text} />
                                    </div>
                                    <div>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                    {/* Second Marquee scrolling to the left */}
                    <Marquee pauseOnHover gradient={false} speed={50} direction="left">
                        <div className={`row ${styles.section5rotatecertificatemain}`}>
                            {secondHalf.map((item, index) => (
                                <div key={index} className={`col-md-2 ${styles.section5rotatecertificate}`}>
                                    <div>
                                        <img src={item.img} alt={item.text} />
                                    </div>
                                    <div>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
} 
export default bannersection5