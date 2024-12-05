import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";
import styles from "../domainSection/domain.module.scss";

const SearchContainer = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        placeholder="Enter your domain..."
        name="searchInput"
        required
      />
      <AnchorBtn
        btnStyle="solidBtn"
        buttonText="Search"
        anchorLink="#"
        icon=""
        btnWidth="12rem"
        borderRadius="4.7rem"
        height="41px"
        type="submit"
      />
    </div>
  );
};

export default SearchContainer;
