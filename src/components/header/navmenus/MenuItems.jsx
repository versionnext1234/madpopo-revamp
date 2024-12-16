import Link from "next/link";
import styles from "../header.module.scss";
import React from "react";

const MenuItems = () => {
  return (
    <div
      className={`collapse navbar-collapse ${styles.navbarCollapse}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${styles.navbarNav}`}>
        {/* WordPress Dropdown */}
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdownWordPress"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            WordPress
          </a>
        
            <ul
              className={`dropdown-menu ${styles.dropdownmenuuu}`}
              aria-labelledby="navbarDropdownWordPress"
            >
              <li>
                <Link href="/wordpresshosting" className="dropdown-item">
                  Web Development
                  <br />
                </Link>
              </li>
              <li>
                <Link href="/wooCommerce" className="dropdown-item">
                  App Development
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link href="/linuxhosting" className="dropdown-item">
                  Linux Hosting
                </Link>
              </li>
              <li>
                <Link href="/cloudeServer" className="dropdown-item">
                  Cloud Server
                </Link>
              </li>
            </ul>
        </li>
    
    
        {/* Hosting Dropdown */}
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdownHosting"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hosting
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownHosting">
            <li>
              <Link href="/web-development" className="dropdown-item">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/app-development" className="dropdown-item">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link href="/digital-marketing" className="dropdown-item">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>

        {/* Domains Dropdown */}
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdownDomains"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Domains
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownDomains">
            <li>
              <Link href="/web-development" className="dropdown-item">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/app-development" className="dropdown-item">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link href="/digital-marketing" className="dropdown-item">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>

        {/* About Us Dropdown */}
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdownAboutUs"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownAboutUs">
            <li>
              <Link href="/web-development" className="dropdown-item">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/app-development" className="dropdown-item">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link href="/digital-marketing" className="dropdown-item">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
