import styles from "../../header/header.module.scss";
import MenuItems from "../navmenus/MenuItems";
import LeftBoxWrap from "./LeftBoxWrap";
import RightBoxWrap from "./RightBoxWrap";
const Navbar = () => {
  return (
    <header id={styles.headerSection}>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${styles.navbarexpandlg}`}>
          <LeftBoxWrap />
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
          <MenuItems />
          <RightBoxWrap />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
