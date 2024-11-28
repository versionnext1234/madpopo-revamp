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
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            WordPress
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" href="/web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/app-development">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="/digital-marketing">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hosting
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" href="/web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/app-development">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="/digital-marketing">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Domains
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" href="/web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/app-development">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="/digital-marketing">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.navItem} nav-item dropdown`}>
          <a
            className={`${styles.navLink} nav-link dropdown-toggle`}
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" href="/web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/app-development">
                App Development
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="/digital-marketing">
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
