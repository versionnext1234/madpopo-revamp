import { useState } from "react";
import style from '../header.module.scss';
import LeftBoxWrap from "./LeftBoxWrap";
import RightBoxWrap from "./RightBoxWrap";
import Link from 'next/link';

export default function MegaMenuNavbar() {
 
  return (
    <>
      <div className={style.headersmainbox}>
        {/* ********** */}
        <header id={style.headerSection}>
          <div className="container">
            <nav className={`navbar navbar-expand-lg ${style.navbarexpandlg}`}>
            <LeftBoxWrap/>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </header>
        {/* <div> <LeftBoxWrap /> </div> */}
        {/**********************navbar**********************/}
        <div>
          <header className={`${style.header} ${style.dark}`}>
            <nav role="navigation">
              <ul className={`${style.mainNav} ${style.navRow}`}>
                <li className={style.topLevelLink}>
                  <a className={style.megaMenu} >
                    <span> WordPress </span>
                  </a>   
                    <div className={style.subMenuBlock} id="five-block">
                      <div>
                        <div className={`${style.subMenuHeadmain}`}>
                          <h2 className={style.subMenuHead}>
                            <span className={style.subMenuHeadpara}>
                              Web hosting that scales from easy to expert.
                            </span>
                            <p className={style.subMenuHeadpara1}>
                              A ton of website hosting options, 99.9% uptime guarantee, free SSL certificate,
                              easy WordPress installs, and a free domain for a year.
                            </p>
                            <div className={style.subMenuHeadChildMain} style={{ marginTop: "20px" }}>

                              <div className={style.InnerHeadSubChildMaincontent}>
                                <div>
                                  <img src="/images/header/wordpressicon.png" alt="WordPress Icon" />
                                </div>
                                <div>
                                  <Link href="/wordpresshosting" legacyBehavior>
                                    <a>
                                      <h3>WordPress Hosting</h3>
                                      <p className={style.InnerHeadSubChildMaincontentparapara}>
                                        Streamline your site with WordPress hosting.
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              {/* 2 - WooCommerce Hosting */}
                              <div className={style.InnerHeadSubChildMaincontent}>
                                <div>
                                  <img src="/images/header/woocomicon.png" alt="WooCommerce Icon" />
                                </div>
                                <div>
                                  <Link href="/wooCommerce" legacyBehavior>
                                    <a>
                                      <h3>WooCommerce Hosting</h3>
                                      <p className={style.InnerHeadSubChildMaincontentparapara}>
                                        Streamline your site with WooCommerce hosting.
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              {/* 3 - Linux Web Hosting */}
                              <div className={style.InnerHeadSubChildMaincontent}>
                                <div>
                                  <img src="/images/header/linuxicon.png" alt="Linux Hosting Icon" />
                                </div>
                                <div>
                                  <Link href="/linuxhosting" legacyBehavior>
                                    <a>
                                      <h3>Linux Web Hosting</h3>
                                      <p className={style.InnerHeadSubChildMaincontentparapara}>
                                        Streamline your site with Linux hosting.
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              {/* 4 - Windows Web Hosting */}
                              <div className={style.InnerHeadSubChildMaincontent}>
                                <div>
                                  <img src="/images/header/windowsicon.png" alt="Windows Hosting Icon" />
                                </div>
                                <div>
                                  <Link href="/cloudeServer" legacyBehavior>
                                    <a>
                                      <h3>Windows Web Hosting</h3>
                                      <p className={style.InnerHeadSubChildMaincontentparapara}>
                                        Streamline your site with Windows hosting.
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </h2>
                        </div>
                        {/* Column 2 */}
                        <div>
                          <div className={`${style.subMenuHeadmain}`}>
                            <h2 className={style.subMenuHead2}>
                              <div className={style.subMenuHeadChildMain}>
                                {/* Cloud Hosting */}
                                <div className={style.InnerHeadSubChildMaincontent}>
                                  <div>
                                    <img src="\images\header\virtual-dedicated-server.png" alt="Cloud Hosting Icon" />
                                  </div>
                                  <div>
                                    <Link href="/cloudeServer" legacyBehavior>
                                      <a>
                                        <h3>Cloud Hosting</h3>
                                        <p className={style.InnerHeadSubChildMaincontentparapara}>
                                          Streamline your site with Cloud hosting.
                                        </p>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                {/* Dedicated Server */}
                                <div className={style.InnerHeadSubChildMaincontent}>
                                  <div>
                                    <img src="\images\header\dedicated-server.png" alt="Dedicated Server Icon" />
                                  </div>
                                  <div>
                                    <Link href="/dedicatedserver" legacyBehavior>
                                      <a>
                                        <h3>Dedicated Server</h3>
                                        <p className={style.InnerHeadSubChildMaincontentparapara}>
                                          Streamline your site with Dedicated hosting.
                                        </p>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                {/* Business Email Hosting */}
                                <div className={style.InnerHeadSubChildMaincontent}>
                                  <div>
                                    <img src="\images\header\Emailicon.png" alt="Business Email Hosting Icon" />
                                  </div>
                                  <div>
                                    <Link href="/emailhosting" legacyBehavior>
                                      <a>
                                        <h3>Business Email Hosting</h3>
                                        <p className={style.InnerHeadSubChildMaincontentparapara}>
                                          Streamline your site with Business email hosting.
                                        </p>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                {/* Reseller Hosting */}
                                <div className={style.InnerHeadSubChildMaincontent}>
                                  <div>
                                    <img src="\images\header\Resellericon.png" alt="Reseller Hosting Icon" />
                                  </div>
                                  <div>
                                    <Link href="/resellerhosting" legacyBehavior>
                                      <a>
                                        <h3>Reseller Hosting</h3>
                                        <p className={style.InnerHeadSubChildMaincontentparapara}>
                                          Streamline your site with Reseller hosting.
                                        </p>
                                      </a>
                                    </Link>
                                  </div>
                                </div>

                              </div>
                            </h2>
                          </div>
                        </div>
                        <div className={style.headbuyNow}>
                          Buy Now
                        </div>
                      </div>
                    </div>

                </li>
                {/*******/}
                <li className={style.topLevelLink}>
                  <a className={style.megaMenu}>
                    <span>Hosting</span>
                  </a>
                  <div className={style.subMenuBlock}>
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <h2 className={style.subMenuHead}>Software Resources</h2>
                        <ul className={style.subMenuLists}>
                          <li><a href="#">Software Resources</a></li>
                          <li><a href="#">Software Resources</a></li>
                          <li><a href="#">Software Resources</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/*******/}
                <li className={style.topLevelLink}>
                  <a className={style.megaMenu}>
                    <span>Domains</span>
                  </a>
                  <div className={style.subMenuBlock}>
                    <div className="row">
                      <div className="col-md-12 col-sm-6">
                        <h2 className={style.subMenuHead}>Software Resources</h2>
                        <ul className={style.subMenuLists}>
                          <li><a href="#">Software Resources</a></li>
                          <li><a href="#">Software Resources</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/*******/}
                <li className={style.topLevelLink}>
                  <a className={style.megaMenu}>
                    <span>About Us</span>
                  </a>
                  <div className={style.subMenuBlock}>
                    <div className="row">
                      <div className="col-md-12 col-sm-6">
                        <h2 className={style.subMenuHead}>Software Resources</h2>
                        <ul className={style.subMenuLists}>
                          <li><a href="#">Software Resources</a></li>
                          <li><a href="#">Software Resources</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {/**********************navbar **************** */}
        <div >
          <header id={style.headerSection}>
            <div className="container">
              <nav className={`navbar navbar-expand-lg ${style.navbarexpandlg}`}>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* <MenuItems /> */}
                <RightBoxWrap />
              </nav>
            </div>
          </header>
        </div>

      </div>
    </>

  );
}
