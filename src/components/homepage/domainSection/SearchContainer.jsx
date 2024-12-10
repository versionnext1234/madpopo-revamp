"use client";
import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";
import styles from "../domainSection/domain.module.scss";
import DropdownSelect from "./DropdownSelect";

const SearchContainer = ({ inputValue, handleDomainChange, currency, handleCurrencyChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        placeholder="Enter your domain..."
        name="searchInput"
        value={inputValue}
        onChange={handleDomainChange}
        required
      />
      <DropdownSelect currency={currency} handleCurrencyChange={handleCurrencyChange}/>

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
