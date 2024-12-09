import React from 'react';
import styles from "../footer/CommonFooter.module.scss";
import classNames from 'classnames';

const CommonFooter = () => {
    return (
        <>
            <footer className={styles.homeFooter}>
                <section className={styles.footerGrid}>
                    <article className={styles.footerItem}>
                        <h4>Hosting</h4>
                        <ul className={styles.footerItemunorderlistt}>
                            <li ><a href="/wordpress-hosting" title="WordPress Hosting">WordPress Hosting</a></li>
                            <li><a href="/window-hosting" title="Window Hosting">Window Hosting</a></li>
                            <li><a href="/e-commerce-hosting" title="E-Commerce Hosting">E-Commerce Hosting</a></li>
                            <li><a href="/linux-hosting" title="Linux Hosting">Linux Hosting</a></li>
                            <li><a href="/cloud-hosting" title="Cloud Hosting">Cloud Hosting</a></li>
                            <li><a href="/web-hosting" title="Web Hosting">Web Hosting</a></li>
                        </ul>
                    </article>
                    <article className={styles.footerItem}>
                        <h4>Domain</h4>
                        <ul className={styles.footerItemunorderlistt}>
                            <li><a href="/domain-name-search" title="Domain Name Search">Domain Name Search</a></li>
                            <li><a href="/cheap-domain" title="Cheap Domain Name">Cheap Domain Name</a></li>
                            <li><a href="/free-domain" title="Free Domain">Free Domain</a></li>
                            <li><a href="/whois-lookup" title="WHOIS Lookup">WHOIS Lookup</a></li>
                            <li><a href="/free-ssl-certificate" title="Free SSL Certificate">Free SSL Certificate</a></li>
                            <li><a href="/domain-transfer" title="Domain Transfer">Domain Transfer</a></li>
                            <li><a href="/domain-extensions" title="Domain Extensions">Domain Extensions</a></li>
                        </ul>
                    </article>
                    <article className={styles.footerItem}>
                        <h4>Server Service</h4>
                        <ul className={styles.footerItemunorderlistt}>
                            <li><a href="/virtual-server" title="Virtual Server">Virtual Server</a></li>
                            <li><a href="/dedicated-server" title="Dedicated Server">Dedicated Server</a></li>
                            <li><a href="/co-location-server" title="Co-Location Server">Co-Location Server</a></li>
                        </ul>
                        <h4>Solution</h4>
                        <ul className={styles.footerItemunorderlistt}>
                            <li><a href="/cpanel" title="CPanel">CPanel</a></li>
                            <li><a href="/plesk" title="Plesk">Plesk</a></li>
                            <li><a href="/ddos-protection" title="DDoS Protection">DDoS Protection</a></li>
                        </ul>
                    </article>
                    <article className={styles.footerItem}>
                        <h4>Information</h4>
                        <ul className={styles.footerItemunorderlistt}>
                            <li><a href="/pricing" title="Pricing">Pricing</a></li>
                            <li><a href="/reviews" title="Reviews">Reviews</a></li>
                            <li><a href="/affiliated-program" title="Affiliated Program">Affiliated Program</a></li>
                            <li><a href="/referral-program" title="Referral Program">Referral Program</a></li>
                            <li><a href="/road-map" title="Road Map">Road Map</a></li>
                            <li><a href="/site-map" title="Site Map">Site Map</a></li>
                        </ul>
                    </article>

                    <article className={styles.footerItem}>
                        <h4>Company</h4>
                        <ul className={styles.footerItemunorderlistt}>
                            <li><a href="/about" title="About MadPopo">About <span className={styles.madpopocolor}>MadPopo</span></a></li>
                            <li><a href="/our-technology" title="Our Technology">Our Technology</a></li>
                            <li><a href="/careers" title="Careers">Careers</a></li>
                            <li><a href="/blog" title="Blog">Blog</a></li>
                            <li><a href="/terms-and-conditions" title="Terms and Conditions">Terms and Conditions</a></li>
                            <li><a href="/privacy" title="Privacy">Privacy</a></li>
                        </ul>
                    </article>

                    <article className={styles.footerItemm}>
                        <h2>Do you Need Support?</h2>
                        <div className={styles.doyouneed_support}>
                            <div className={styles.doyouneed_support_parrent}>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div><a 
                            style={{color:"white"}}
                            href="mailto:mail@madpopo.com" title="Email MadPopo">mail@madpopo.com</a></div>
                        </div>
                        <div className={styles.doyouneed_contact}>
                            <div className={styles.doyouneed_contact_parrent}>
                                <i className="fa-solid fa-square-phone"></i>
                            </div>
                            <div><a 
                             style={{color:"white"}}
                            href="tel:+917039003001" title="Call MadPopo">+91 7039003001</a></div>
                        </div>
                        <div className={styles.doyouneed_para}>
                            <p>Working on a big project? Let our experts help you out.</p>
                        </div>
                        <div className={styles.doyouneedexpert}>
                            <p><a 
                             style={{color:"white"}}
                            href="/talk-to-expert" title="Talk to an Expert">Talk to an expert</a></p>
                        </div>
                    </article>
                </section>

                <section className={classNames(styles.footerGrid2, 'container')}>
                    <div className={styles.footerGrid2_parent}>
                        <div><img src="images/bank/card1.png" alt="Payment Card 1" /></div>
                        <div><img src="images/bank/card2.png" alt="Payment Card 2" /></div>
                        <div><img src="images/bank/card3.png" alt="Payment Card 3" /></div>
                        <div><img src="images/bank/card4.png" alt="Payment Card 4" /></div>
                        <div><img src="images/bank/card5.png" alt="Payment Card 5" /></div>
                        <div style={{color:'#ff6a00'}}>and more...</div>
                    </div>
                    <div className={styles.doyouneedSocialmedia_main}>
                        <div className={styles.doyouneedSocialmedia}>
                            <a 
                            href="https://www.linkedin.com" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className={styles.doyouneedSocialmedia}>
                            <a href="https://www.instagram.com" title="Instagram"><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                        <div className={styles.doyouneedSocialmedia}>
                            <a href="https://www.facebook.com" title="Facebook"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                        <div className={styles.doyouneedSocialmedia}>
                            <a href="https://twitter.com" title="Twitter"><i className="fa-brands fa-square-x-twitter"></i></a>
                        </div>
                    </div>
                </section>

                <hr className={styles.container} style={{ border: '0', borderTop: '1px solid #ccc' }} />
                <section className={`${styles.allrightsfooter} container`}>
                    <div>© 2024 MadPopo | All rights reserved.</div>
                    <div>Crafted by <a href="https://www.versionnext.com" title="Version Next Technologies" target="_blank" rel="noopener noreferrer">Version Next Technologies</a>.</div>
                </section>
            </footer>
        </>
    );
};
export default CommonFooter;
