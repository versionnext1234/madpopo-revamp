import styles from "../domainSection/domain.module.scss";
import domainPriceData from "@/mockdata/domainPriceMockdata";

const DomainPrice = ({ setCurrency }) => {
  const handleCurrencyClick = (currency) => {
    setCurrency(currency);
  };

  return (
    <div className={styles.priceWrap}>
      {domainPriceData.map((item, index) => (
        <div
          key={index}
          className={styles.priceBox}
          onClick={() => handleCurrencyClick(item.currency)}
        >
          <h6>{item.currency}</h6>
          <h6>{item.price}</h6>
          <del>{item.originalPrice}</del>
        </div>
      ))}
    </div>
  );
};

export default DomainPrice;
