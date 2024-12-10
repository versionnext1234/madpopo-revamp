import styles from "../domainSection/domain.module.scss";
import domainPriceData from "@/mockdata/domainPriceMockdata";
import Image from "next/image";

const DropdownSelect = ({ currency, handleCurrencyChange }) => {
  return (
    <div className={styles.dropdownWrap}>
      <select
        name="currencySelect"
        value={currency}
        onChange={handleCurrencyChange}
        className={styles.customSelect}
      >
        <option value="">.com</option>
        {domainPriceData.map((item, index) => (
          <option key={index} value={item.currency}>
            {item.currency}
          </option>
        ))}
      </select>
      <span className={`${styles.arrowIcon} ${styles.rotated}`}>
        <Image
          src="/images/card/down-arrow.svg"
          width={17}
          height={9}
          alt="down arrow"
        />
      </span>
    </div>
  );
};

export default DropdownSelect;
